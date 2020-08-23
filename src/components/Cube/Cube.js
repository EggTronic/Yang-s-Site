import React, { useEffect, useContext, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FrequencyContext } from '../../assets/const';
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
  zoom: ${props => 1 + props.freq/2550};
  transition: all 0.4s ease-in-out;
`;


function Cube() {
  const frequency = useContext(FrequencyContext);
  const [freqData, setFreqData] = useState(frequency.freq ? frequency.freq[0] : 1);

  const s1 = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);
  const s4 = useRef(null);
  const s5 = useRef(null);
  const s6 = useRef(null);

  useEffect(() => {
    const it = setInterval(() => {
      setFreqData(frequency.freq ? frequency.freq[0] : 1);
    }, 1000);
    return () => clearInterval(it);
  });

  return (
    <Wrapper>
      <Inner>
        <Side src={logo} ref={s1} freq={freqData} />
        <Side src={logo} ref={s2} freq={freqData} />
        <Side src={logo} ref={s3} freq={freqData} />
        <Side src={logo} ref={s4} freq={freqData} />
        <Side src={logo} ref={s5} freq={freqData} />
        <Side src={logo} ref={s6} freq={freqData} />
      </Inner>
    </Wrapper>
  );
}

export default Cube;
