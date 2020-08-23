import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Parallax from 'parallax-js';
import Card from '../../components/Card/Card';
import Cube from '../../components/Cube/Cube';
import logo from '../../assets/images/logo-transparent.png';

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
  overflow: hidden;
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
        <h2 data-depth="0.05">Hello, this is EggTronic</h2>
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
