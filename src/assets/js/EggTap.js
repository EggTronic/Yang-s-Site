/* eslint-disable */

window.PIXI = PIXI;

import pixiSound from 'pixi-sound';
import 'pixi-layers';
import '@pixi/graphics-extras';
import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { a1, a2 } from './Animation';
import music from './audios/warmspace_ins.mp3';
import { audioSlices } from './audios/index';

export const colors = [
  0x88CCCC,
  0xFC3E77,
  0xD49E9E,
  0xCCEEEE,
  0x594F57,
  0x888899,
  0xEC5685,
  0x8AD9EC,
  0x109FB1
];

const animations = [
  a1,
  a2
]

export default class EggTap {
  constructor(wrapper, colors) {
    this.animations = animations;
    this.appWrapper = wrapper;
    this.tappers = [];
    this.colors = colors;
    this.currentColor = 0;
    this.currentBgColor = 0;
    this.currentBackGround = null;
    this.lastBackGround = null;
    this.audios = null;
    this.currentTarget = null;
    this.isPressed = false;
    this.layout = 'horizontal'; // or vertical
    this.currentTime = 0;
    this.offset = -0.56;
    this.interval = 0.125/2;
    this.bgmCtx = null;
    this._init();
  }

  async _init() {
    this._initApp();
    this._initView();
    this._initAutoResize();
    this._initAudios();
    this._initBackground();
  }

  _initApp() {
    this.app = new PIXI.Application({
      autoResize: true,
      resolution: devicePixelRatio
    });
    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);

    // event
    this.appWrapper.addEventListener('mousedown', function () {
      this.isPressed = true;
    }.bind(this))
    this.appWrapper.addEventListener('mouseup', function () {
      this.isPressed = false;
    }.bind(this))

    this.appWrapper.addEventListener('touchstart', function () {
      this.isPressed = true;
    }.bind(this))
    this.appWrapper.addEventListener('touchend', function () {
      this.isPressed = false;
    }.bind(this))
  }

  _initView() {
    this.appWrapper.appendChild(this.app.view);

    this.app.stage = new PIXI.display.Stage();
    this.app.stage.sortableChildren = true;

    this.topGroup = new PIXI.display.Group(2, false);
    this.midGroup = new PIXI.display.Group(1, false);
    this.botGroup = new PIXI.display.Group(-1, false);

    this.topLayer = new PIXI.display.Layer(this.topGroup);
    this.midLayer = new PIXI.display.Layer(this.midGroup);
    this.botLayer = new PIXI.display.Layer(this.botGroup);

    this.app.stage.addChild(this.topLayer);
    this.app.stage.addChild(this.midLayer);
    this.app.stage.addChild(this.botLayer);
  }

  _initBackground() {
    const initialBackground = new PIXI.Graphics()
      .beginFill(this.colors[0])
      .drawRegularPolygon(0, 0, 2 * Math.max(this.app.screen.width, this.app.screen.height), 4, 0);
    initialBackground.displayGroup = this.botGroup;
    this.app.stage.addChild(initialBackground)
  }

  _initAutoResize() {
    // Listen for window resize events
    window.addEventListener('resize', resize.bind(this));

    // Resize function window
    function resize() {
      // Get the p
      const parent = this.app.view.parentNode;

      // Resize the renderer
      this.app.renderer.resize(parent.clientWidth, parent.clientHeight);

      // You can use the 'screen' property as the renderer visible
      // area, this is more useful than view.width/height because
      // it handles resolution
      // for (let t of this.tappers) {
      //   t.position.set(parent.width, parent.height);
      // } 

      if (this.app.screen.width < this.app.screen.height) {
        this.layout = 'vertical';
      }

    }

    resize.bind(this)();
  }

  _initTaps() {
    let row = 4, col = 8;
    if (this.layout === 'vertical') {
      row = 8;
      col = 4;
    }
    const width = this.app.view.parentNode.clientWidth / col;
    const height = this.app.view.parentNode.clientHeight / row;

    for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
        const tapper = new PIXI.Graphics()
          .beginFill(0xffffff, 1)
          .drawRect(width * c, height * r, width, height);
        gsap.to(tapper, { duration: 0, pixi: { alpha: 0 } });
        tapper.parentGroup = this.topGroup;
        tapper.interactive = true;
        tapper.buttonMode = true;
        tapper.hitArea = new PIXI.Rectangle(width * c, height * r, width, height);

        const draw = function (isClick, e) {
          e.stopPropagation();

          if (!this.isPressed && !isClick) return;

          const target = 'k' + (r * col + c + 1);
          if (this.currentTarget === target && !isClick) return;

          this.currentTarget = target;
          const tl2 = gsap.timeline();
          tl2.to(tapper, { duration: .1, pixi: { fillColor: '0xffffff', alpha: 1 } });
          tl2.to(tapper, { duration: .6, pixi: { alpha: 0 } });

          if (!this._throttle()) return;
          this._dispatchSound(target);
          this._drawBackground();

          this.currentColor++;
          this.animations[(r + c) % 2](this.app, this.midGroup, PIXI, gsap, colors, this.currentColor);

        }.bind(this);

        tapper.on('pointerover', (e) => draw(false, e));
        tapper.on('pointerdown', (e) => draw(true, e));

        // need something like touchmove && touchover, or fallback to dom events
        // tapper.on('touchstart', (e) => draw(false, e));

        // Add it to the stage
        this.tappers.push(tapper);
        this.app.stage.addChild(tapper);
      }
    }
  }

  _throttle() {
    // throttle
    let timeSnapshot = this.bgmCtx.currentTime + this.offset;

    if ((timeSnapshot - this.currentTime) < this.interval) return false;

    this.currentTime = timeSnapshot + this.interval;
    return true;
    // // get current time
    // let time = (this.bgmCtx.currentTime + this.offset).toFixed(3);

    // // calculate currenTtime to match interval
    // let sec = Math.floor(time);
    // let msec = time - sec;

    // if (msec === 0) {
    //   this.currentTime = sec;
    //   return true;
    // }

    // for (let i = 1; i <= 1 / this.interval; i++) {
    //   if (Math.abs(msec - i * this.interval) < this.interval / 2) {
    //     // this.currentTime = sec + i * this.interval;
    //     this.currentTime = time;
    //     return true;
    //   }
    // }
  }

  _dispatchSound(target) {
    // playsound
    PIXI.Loader.shared.resources[target].sound.play();
  }

  _drawBackground() {
    let seed = Math.floor(Math.random() * this.colors.length);

    // if (seed !== this.currentColor) return;
    const heading = Math.random();
    const radius = this.app.screen.width;

    const sides = 4;
    const rotate = Math.random() * 360;
    const polyPts = [
      heading >= 0.5 ? -2 * radius : 3 * radius,
      heading >= 0.5 ? -2 * radius : 3 * radius,
      radius * 2,
      sides,
      rotate
    ];
    const bg = new PIXI.Graphics()
      .beginFill(this.colors[seed], 1)
      .drawRegularPolygon(...polyPts);
    bg.seed = seed;
    bg.parentGroup = this.midGroup;

    this.currentBackGround = bg;
    const tl = gsap.timeline();
    tl.to(bg, {
      duration: 1,
      pixi: {
        x: heading >= 0.5 ? 2 * radius : -2 * radius,
        y: heading >= 0.5 ? 2 * radius : -2 * radius
      },
      onComplete: function () {
        if (!this.lastBackGround) return;
        this.app.stage.removeChild(bg);
      }.bind(this)
    });

    this.app.stage.addChild(bg);
  }

  async _initAudios() {
    PIXI.Loader.shared.add('bgm', music);
    for (let name in audioSlices) {
      PIXI.Loader.shared.add(name, audioSlices[name]);
    }

    PIXI.Loader.shared.load((loader, resources) => {
      resources.bgm.sound.loop = true;
      resources.bgm.sound.volume = 0.5;

      resources.bgm.sound.play();
      this.bgmCtx = resources.bgm.sound.context.audioContext;
      this._initTaps();
    });
  }

  clear() {
    PIXI.Loader.shared.reset();
    pixiSound.removeAll();
    for (let child of this.app.stage.children) {
      child.off('pointerover');
      child.off('pointerdown');
      // child.off('pointerenter');
      // child.off('touchmove');
      // child.off('touchend');
      // child.off('touchstart');
    }
    // this.appWrapper.removeEventListener('mouseup');
    // this.appWrapper.removeEventListener('mousedown');
  }
}