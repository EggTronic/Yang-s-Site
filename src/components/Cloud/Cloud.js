import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import logo from '../../assets/images/logo.png';
// import * as THREE from 'three';

const Canvas = styled.canvas`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`

function Cloud() {
  const canvas = useRef(null);

  useEffect(() => {
    // if (!canvas.current) return;
    // const scene = new THREE.Scene();

    // const renderFrame = () => {
    //   setTimeout(() => {
    //     if (!canvas.current) return;
    //     requestAnimationFrame(renderFrame);
    //   }, 1000 / 60);
    // }
    // renderFrame();

  }, []);


  return (
    <Canvas ref={canvas}></Canvas>
  );
}

export default Cloud;
