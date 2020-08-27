import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const ProjectPageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: calc(100vh - 164px);
  width: 90vw;
  top: 100px;
  background: rgba(111,111,111,0.4);
  display: flex;
  flex-wrap: wrap;
  canvas {
    display: block;
  }
`;


function ProjectPage() {
  const wrapper = useRef(null);
  useEffect(() => {
    const PIXI = window.PIXI;
    PIXI.INTERACTION_FREQUENCY = 60;
    const TweenMax = window.TweenMax;

    let app = new PIXI.Application({
      autoResize: true,
      resolution: devicePixelRatio
    });

    wrapper.current.appendChild(app.view);
    const stage = new PIXI.Container();
    stage.interactive = true;

    const rect = new PIXI.Graphics()
      .beginFill(0xff0000)
      .drawRect(-200, -200, 200, 200);
    rect.interactive = true;
    rect.buttonMode = true;
    rect.hitArea = new PIXI.Rectangle(-200, -200, 200, 200);
    rect.click = function (e) {
      console.log(1);
    }

    // Add it to the stage
    app.stage.addChild(rect);

    function animate() {
      requestAnimationFrame(animate);
      TweenMax.to(rect, 1, {
        x: 500, pixi: { fillColor: 0x0088f7 }
      });
    }
    animate();

    // Listen for window resize events
    window.addEventListener('resize', resize);

    // Resize function window
    function resize() {

      // Get the p
      const parent = app.view.parentNode;

      // Resize the renderer
      app.renderer.resize(parent.clientWidth, parent.clientHeight);

      // You can use the 'screen' property as the renderer visible
      // area, this is more useful than view.width/height because
      // it handles resolution
      rect.position.set(app.screen.width, app.screen.height);
    }

    resize();

  }, []);
  return (
    <ProjectPageWrapper ref={wrapper}>
    </ProjectPageWrapper>
  );
}

export default ProjectPage;
