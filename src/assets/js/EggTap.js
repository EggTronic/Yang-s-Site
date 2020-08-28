import * as PIXI from 'pixi.js';
import '@pixi/graphics-extras';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

export const colors = [
  'rgb(136, 204, 204)',
  'rgb(252, 62, 119)',
  'rgb(212, 158, 158)',
  'rgb(204, 238, 238)',
  'rgb(89, 79, 87)',
  'rgba(136, 136, 153, 0.6)',
  'rgb(236, 86, 133)',
  'rgb(138, 217, 236)',
  'rgb(16, 159, 177)'
];

export default class EggTap {
  constructor(wrapper, colors) {
    this.appWrapper = wrapper;
    this.shapes = [];
    this.tappers = [];
    this.colors = colors;
    this.currentColor = 0;
    this.currentBgColor = 0;
    this._init();
    this._start();
  }

  _init() {
    this._initApp();
    this._initView();
    this._initAutoResize();
    this._initTaps();
    this._initShapes();
    this._initAudios();
  }

  _initApp() {
    this.app = new PIXI.Application({
      autoResize: true,
      resolution: devicePixelRatio
    });

    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);
  }

  _initView() {
    this.appWrapper.appendChild(this.app.view);
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

      if (this.app.screen.width > this.app.screen.height) {
      }

    }

    resize.bind(this)();
  }

  _initTaps(mode) {
    let row = 4, col = 8;
    if (mode === 'vertical') {
      row = 8;
      col = 4;
    }
    const width = this.app.view.parentNode.clientWidth / col;
    const height = this.app.view.parentNode.clientHeight / row;

    for (let r = 0; r < row; r++) {
      for (let c = 0; c < col; c++) {
        const tapper = new PIXI.Graphics()
          .beginFill(0x000000, 1)
          .drawRect(width * c, height * r, width, height);
        tapper.interactive = true;
        tapper.buttonMode = true;
        tapper.hitArea = new PIXI.Rectangle(width * c, height * r, width, height);
        tapper.click = function (e) {
          // console.log(r, c);
          this.shapes[r * c].animate();
          const tl2 = gsap.timeline();
          tl2.to(tapper, { duration: 0.05, pixi: { fillColor: '0xffffff', alpha: 1 } });
          tl2.to(tapper, { duration: 0.05, pixi: { alpha: 0 } });
        }.bind(this);
        // Add it to the stage
        this.tappers.push(tapper);
        this.app.stage.addChild(tapper);
      }
    }
  }


  _initShapes() {
    for (let i = 0; i < 32; i++) {
      const polyPts = [0, 0, 11, 5, 2];
      const shape = new PIXI.Graphics()
        .beginFill(0xff0000)
        .drawRegularPolygon(...polyPts);
      shape.x = this.app.screen.width / 2;
      shape.y = this.app.screen.height / 2;
      shape.zIndex = 0;
      shape.visible = false;

      shape.animate = () => {
        shape.visible = true;
        shape.scale = 1;
        shape.zIndex = 100;
        const tl1 = gsap.timeline();
        this.currentColor++;
        if (this.currentColor > this.colors.length - 1) this.currentColor %= this.colors.length;
        tl1.to(shape, {
          pixi: {
            scale: 20,
            rotation: -Math.random() * 180,
            fillColor: this.colors[this.currentColor],
          },
          duration: .4,
          onComplete: () => { 
            shape.visible = false; 
            shape.zIndex = 0;
          }
        });
      }

      this.shapes.push(shape);
      this.app.stage.addChild(shape);
    }
  }

  _initAudios() {

  }

  _start() {
    this._render();
  }

  _render() {
    // requestAnimationFrame(this._render.bind(this));
  }
}