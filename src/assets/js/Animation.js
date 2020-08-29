
const a1 = (app, group, PIXI, gsap, colors, currentColor) => {
  const polyPts = [0, 0, 11, Math.random() * 10 + 3, 2];
  const shape = new PIXI.Graphics()
    .beginFill(currentColor)
    .drawRegularPolygon(...polyPts);
  shape.x = app.stage.screen.width / 2;
  shape.y = app.stage.screen.height / 2;
  shape.parentGroup = group;

  const tl1 = gsap.timeline();
  if (currentColor > colors.length - 1) currentColor %= colors.length;
  tl1.to(shape, {
    pixi: {
      scale: 20,
      rotation: Math.random() * 360 - 180,
      fillColor: colors[currentColor],
    },
    duration: 0.5,
    onComplete: () => {
      app.stage.removeChild(shape);
    }
  });

  app.stage.addChild(shape);
};


const a2 = (app, group, PIXI, gsap, colors, currentColor) => {
  const polyPts = [0, 0, 1, 4, Math.random() * 360];
  let nums = 20;
  while (nums--) {
    const shape = new PIXI.Graphics()
      .beginFill(currentColor)
      .drawRegularPolygon(...polyPts);
    shape.x = app.stage.screen.width / 2;
    shape.y = app.stage.screen.height / 2;
    shape.parentGroup = group;
    
    const tl1 = gsap.timeline();
    if (currentColor > colors.length - 1) currentColor %= colors.length;
    tl1.to(shape, {
      pixi: {
        x: Math.random() * app.stage.screen.width,
        y: Math.random() * app.stage.screen.height,
        scale: 20,
        rotation: Math.random() * 360,
        fillColor: colors[currentColor],
      },
      duration: 0.5,
      onComplete: () => {
        app.stage.removeChild(shape);
      }
    });

    app.stage.addChild(shape);
  }
};

export { a1, a2 };