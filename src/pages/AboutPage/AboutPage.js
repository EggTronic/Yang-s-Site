import React from 'react';
import styled, { keyframes } from 'styled-components';
import FlipCard from '../../components/FlipCard/FlipCard';
import GlowIcon from '../../components/GlowIcon/GlowIcon';
import unimelb from '../../assets/images/unimelb.png';
import uniliverpool from '../../assets/images/uniliverpool.png';
import monstercat from '../../assets/images/monstercat.png';

const moveGradient = keyframes`
  50% {
    background-position: 100% 50%;
  }
`;

const FrontWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const SectionHeader = styled.div`
  background: #373A40;
  li {
    margin-bottom: 0px;
  }
`;

const Img = styled.img`
  width: 70%;
  margin-bottom: 10px;
`;

const Section = styled.section`
  transition: all 0.5s linear;
  background: ${props => props.background};
  margin: 0px;
  padding: 10px 0px;
`;

const AboutPageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: calc(100vh - 164px);
  width: 90vw;
  top: 100px;
  /* background: rgba(111,111,111,0.4); */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
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
      <FlipCard height='100%' width='300px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-user-secret' />
          <h1>General</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-user-secret' />
          </SectionHeader>
          <h1>Male</h1>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='300px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-graduation-cap' />
          <h1>Education</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-graduation-cap' />
          </SectionHeader>
          <Section background='#f38181'>
            <Img src={unimelb} alt='unimelb' />
            <br />
            <p>
              <i
                style={{ verticalAlign: 'bottom' }}
                className="fas fa-calendar-week"
              /> 2018 - 2020
            </p>
            <br />
            <p>Master Degree</p>
            <p>Software Engineering</p>
          </Section>
          <Section background='#373A40'>
            <Img src={uniliverpool} alt='uniliverpool' />
            <br />
            <p>
              <i
                style={{ verticalAlign: 'bottom' }}
                className="fas fa-calendar-week"
              /> 2015 - 2017
            </p>
            <br />
            <p>Bachelor Degree</p>
            <p>Software Development</p>
          </Section>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='300px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-bolt' />
          <h1>Skill</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-bolt' />
          </SectionHeader>
          <h1>Typescript</h1>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='300px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-atom' />
          <h1>Experience</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-atom' />
          </SectionHeader>
          <h1>React</h1>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='300px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-headphones-alt' />
          <h1>Music</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-headphones-alt' />
          </SectionHeader>
          <Section background='white'>
            <Img src={monstercat} alt='monstercat' />
            <br />
            <h1 style={{ color: 'black' }}>Monster Cat</h1>
            <br />
          </Section>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='300px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-video' />
          <h1>Film</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-video' />
          </SectionHeader>
          <h1>Pacific Rim</h1>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='300px'>
        <FrontWrapper>
          <i className='nes-charmander' />
          <h1>Anime</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <i className='nes-charmander' />
          </SectionHeader>
          <h1>No Game No Life</h1>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='300px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-gamepad' />
          <h1>Game</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-gamepad' />
          </SectionHeader>
          <h1>Dota2</h1>
        </div>
      </FlipCard>
    </AboutPageWrapper>
  );
}

export default AboutPage;
