import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Parallax from 'parallax-js';
import Typist from 'react-typist';
import Card from '../../components/Card/Card';
import Cube from '../../components/Cube/Cube';
import logo from '../../assets/images/logo2-transparent.png';

const HomePageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: calc(100vh - 164px);
  width: 90vw;
  top: 100px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  &::-webkit-scrollbar-thumb {
    background: #FF0000;
  }
`;

const LeftWrapper = styled.div`
  position: relative;
  width:  40vw;
  min-width: 600px;
  height: calc(90% - 20px);
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 1px solid white;
  &:hover{
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
  h2{
    margin:30px;
    line-height: 30px;
    font-size: calc(10px + .5vw);
  }
`;


const RightWrapper = styled.div`
  width:  40vw;
  min-width: 600px;
  height: calc(90% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function HomePage() {
  const scene1 = useRef(null);
  const scene2 = useRef(null);

  useEffect(() => {
    const parallaxInstance1 = new Parallax(scene1.current, {
      relativeInput: true,
      invertY: true,
      invertX: true
    });
    const parallaxInstance2 = new Parallax(scene2.current, {
      relativeInput: true
    });
    parallaxInstance1.friction(.2, .2);
    parallaxInstance2.friction(.2, .2);
  }, []);

  return (
    <HomePageWrapper>
      <Card
        url={logo}
        width={'40.5vw'}
        height={'calc(90% - 52px)'}
        minWidth={'600px'}
      />
      <LeftWrapper ref={scene1}>
        <div data-depth="0.06">
          <Typist
            avgTypingDelay={80}
            cursor={{ show: false }}
          >
            <h2>Hello, this is EggTronic.</h2>
            <Typist.Backspace count={0} delay={500} />
            <h2 data-depth="0.05">I am a Full Stack Web Engineer.</h2>
            <Typist.Backspace count={0} delay={500} />
            <h2 data-depth="0.05">I love music.</h2>
            <Typist.Backspace count={13} delay={500} />
            <h2 data-depth="0.05">I create music.</h2>
            <Typist.Backspace count={15} delay={500} />
            <h2 data-depth="0.05">I create fancy webs!</h2>
            <Typist.Backspace count={20} delay={500} />
            <h2 data-depth="0.05">I am creative and passionate.</h2>
            <Typist.Backspace count={100} delay={500} />
            <h2 data-depth="0.05">Nice to meet you, my friend!</h2>
          </Typist>
        </div>
      </LeftWrapper>
      <RightWrapper ref={scene2}>
        <div data-depth="0.5" >
          <Cube />
        </div>
      </RightWrapper>
    </HomePageWrapper>
  );
}

export default HomePage;
