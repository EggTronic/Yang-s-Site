import React, { useEffect, useContext, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FrequencyContext } from '../../assets/const';
import { visuals } from '../../assets/js/visuals';
import logo2Transparent from '../../assets/images/logo2-transparent.png';

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

const MyCanvas = styled.canvas`
  width: 20vw;
  height: 20vw;
  min-height: 400px;
  min-width: 400px;
  position: absolute;
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
  canvas:nth-child(7){
    transform: rotateY(0deg);
  }
  canvas:nth-child(8){
    transform: rotateY(90deg);
  }
  canvas:nth-child(9){
    transform: rotateX(90deg);
  }
  canvas:nth-child(10){
    transform: rotateZ(90deg);
  }
`;

const Side = styled.img`
  position:absolute;
  opacity: ${props => props.opacity};
  width: 20vw;
  height: 20vw;
  min-height: 400px;
  min-width: 400px;
  transition: all 0.4s ease-in-out;
  border: 1px solid rgba(255,255,255,0.1);
`;


function Cube() {
  const frequency = useContext(FrequencyContext);
  const [freqData, setFreqData] = useState(frequency.freq ? frequency.freq : undefined);

  const s1 = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);
  const s4 = useRef(null);
  const s5 = useRef(null);
  const s6 = useRef(null);
  const c1 = useRef(null);
  const c2 = useRef(null);
  const c3 = useRef(null);
  const c4 = useRef(null);

  useEffect(() => {
    if (!c1.current) return;

    const draw = (visuals, canvas, canvasCtx, frequencyData, options) => {
      for (let i = 0; i < visuals.length; i++) {
        visuals[i](canvas, canvasCtx, frequencyData, options);
      }
    }
    const c1Ctx = c1.current.getContext('2d');
    const c2Ctx = c2.current.getContext('2d');
    const c3Ctx = c3.current.getContext('2d');
    const c4Ctx = c4.current.getContext('2d');
    const options = {
      barWidth: 10,
      barHeight: 4,
      barSpacing: 20,
      barColor: '#fff',
      barNum: 11,
      offsetX: -160,
      offsetY: 0,
      doubleSide: true
    }

    const it = setInterval(() => {
      if (!c1.current) return;
      c1Ctx.clearRect(0, 0, c1.current.width, c1.current.height);
      c2Ctx.clearRect(0, 0, c2.current.width, c2.current.height);
      c3Ctx.clearRect(0, 0, c3.current.width, c3.current.height);
      c4Ctx.clearRect(0, 0, c4.current.width, c4.current.height);
      draw(visuals, c1.current, c1Ctx, freqData, options);
      draw(visuals, c2.current, c2Ctx, freqData, {...options, barColor: '#fff'});
      draw(visuals, c3.current, c3Ctx, freqData, {...options, barColor: '#fff'});
      draw(visuals, c4.current, c4Ctx, freqData, options);
      setFreqData(frequency.freq ? frequency.freq : undefined);
    }, 1000 / 60);
    return () => clearInterval(it);
  });

  return (
    <Wrapper>

      <Inner>
        <Side src={logo2Transparent} ref={s1} opacity={1}/>
        <Side src={logo2Transparent} ref={s2} opacity={1}/>
        <Side src={logo2Transparent} ref={s3} opacity={1}/>
        <Side src={logo2Transparent} ref={s4} opacity={1}/>
        <Side src={logo2Transparent} ref={s5} opacity={1}/>
        <Side src={logo2Transparent} ref={s6} opacity={1}/>
        <MyCanvas ref={c1}></MyCanvas>
        <MyCanvas ref={c2}></MyCanvas>
        <MyCanvas ref={c3}></MyCanvas>
        <MyCanvas ref={c4}></MyCanvas>
      </Inner>
    </Wrapper>
  );
}

export default Cube;
