import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/images/logo.png';

const Rotate3d = keyframes`
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const Wrapper = styled.div`
  perspective: 1000px;
  perspective-origin: 50% 50%;
`;

const Inner = styled.div`
  transform-style: preserve-3d;
  width: 20vw;
  height: 20vw;
  min-height: 400px;
  min-width: 400px;
  margin: auto;
  position: relative;
  animation: ${Rotate3d} 40s linear infinite;
  img:nth-child(1){
    transform: rotateY(0deg) translateZ(max(10vw, 200px));
  }
  img:nth-child(2){
    transform: rotateY(90deg) translateZ(max(10vw, 200px));
  }
  img:nth-child(3){
    transform: rotateY(180deg) translateZ(max(10vw, 200px));
  }
  img:nth-child(4){
    transform: rotateY(-90deg) translateZ(max(10vw, 200px));
  }
  img:nth-child(5){
    transform: rotateX(90deg) translateZ(max(10vw, 200px));
  }
  img:nth-child(6){
    transform: rotateX(-90deg) translateZ(max(10vw, 200px));
  }
`;

const Side = styled.img`
  position:absolute;
  opacity: 0.8;
  width: 20vw;
  height: 20vw;
  min-height: 400px;
  min-width: 400px;
`;

function Cube() {
  return (
    <Wrapper>
      <Inner>
        <Side src={logo} />
        <Side src={logo} />
        <Side src={logo} />
        <Side src={logo} />
        <Side src={logo} />
        <Side src={logo} />
      </Inner>
    </Wrapper>
  );
}

export default Cube;
