import React from 'react';
import styled, { keyframes } from 'styled-components';
import FlipCard from '../../components/FlipCard/FlipCard';

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

const AboutPageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: calc(100vh - 164px);
  width: 90vw;
  top: 100px;
  /* background: rgba(111,111,111,0.4); */
  display: flex;
  flex-wrap: wrap;
  & > div {  
    &:hover {
      --border-width: 3px;
      display: flex;
      color: white;
      border-radius: var(--border-width);
    }
  }
  & > div > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &::after {
      position: absolute;
      content: "";
      top: calc(-1 * var(--border-width));
      left: calc(-1 * var(--border-width));
      z-index: -1;
      width: calc(100% + var(--border-width) * 2);
      height: calc(100% + var(--border-width) * 2);
      background: linear-gradient(
        60deg,
        hsl(224, 85%, 66%),
        hsl(269, 85%, 66%),
        hsl(314, 85%, 66%),
        hsl(359, 85%, 66%),
        hsl(44, 85%, 66%),
        hsl(89, 85%, 66%),
        hsl(134, 85%, 66%),
        hsl(179, 85%, 66%)
      );
      background-size: 300% 300%;
      background-position: 0 50%;

      animation: ${moveGradient} 4s alternate infinite;
    }
  }
`;

function AboutPage() {
  return (
    <AboutPageWrapper>
      <FlipCard height='50%' width='25%'>
        <div>
          <h1>General</h1>
        </div>
        <div>
          <h1>Male</h1>
        </div>
      </FlipCard>
      <FlipCard height='50%' width='25%'>
        <div>
          <h1>Education</h1>
        </div>
        <div>
          <h3>University Of Melbourne</h3>
          <p>Master of Software Engineering</p>
        </div>
      </FlipCard>
      <FlipCard height='50%' width='25%'>
        <div>
          <h1>Skill</h1>
        </div>
        <div>
          <h1>Typescript</h1>
        </div>
      </FlipCard>
      <FlipCard height='50%' width='25%'>
        <div>
          <h1>Experience</h1>
        </div>
        <div>
          <h1>React</h1>
        </div>
      </FlipCard>
      <FlipCard height='50%' width='25%'>
        <div>
          <h1>Music</h1>
        </div>
        <div>
          <h1>Monster Cat</h1>
        </div>
      </FlipCard>
      <FlipCard height='50%' width='25%'>
        <div>
          <h1>Film</h1>
        </div>
        <div>
          <h1>Pacific Rim</h1>
        </div>
      </FlipCard>
      <FlipCard height='50%' width='25%'>
        <div>
          <h1>Anime</h1>
        </div>
        <div>
          <h1>No Game No Life</h1>
        </div>
      </FlipCard>
      <FlipCard height='50%' width='25%'>
        <div>
          <h1>Game</h1>
        </div>
        <div>
          <h1>Dota2</h1>
        </div>
      </FlipCard>
    </AboutPageWrapper>
  );
}

export default AboutPage;
