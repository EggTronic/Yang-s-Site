import React from 'react';
import styled from 'styled-components';
import Progress from '../../components/Progress/Progress';
import FlipCard from '../../components/FlipCard/FlipCard';
import GlowIcon from '../../components/GlowIcon/GlowIcon';
import unimelb from '../../assets/images/unimelb.png';
import uniliverpool from '../../assets/images/uniliverpool.png';
import monstercat from '../../assets/images/monstercat.png';
import avatar from '../../assets/images/avatar.png';

const FrontWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const BackWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const SectionWrapper = styled.div.attrs({
  className: 'section-wrapper'
})`
  position: relative;
  height: calc(100% - 80px);
  overflow: hidden;
`;

export const SectionHeader = styled.div`
  background: ${props => props.background ? props.background : '#373A40'};
  width: 100%;
  height: 80px;
  li {
    margin-bottom: 0px;
  }
`;

const Img = styled.img`
  width: ${props => props.width};
  margin-bottom: 10px;
`;

const Section = styled.section`
  transition: all 0.5s linear;
  background: ${props => props.background};
  margin: 0px;
  padding: 0px 0px 10px 0px;
  height: ${props => props.height};
  text-align: ${props => props.textAlign};
  h1, h2, h3, h4, h5, p {
    margin: 20px;
  }
  p, i {
    line-height: 2;
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
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: overlay;
`;

function AboutPage() {
  return (
    <AboutPageWrapper>
      <FlipCard height='100%' width='400px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-user-secret' width='80px' height='80px' />
          <h1>General</h1>
        </FrontWrapper>
        <BackWrapper>
          <SectionHeader>
            <GlowIcon className='fas fa-user-secret' width='80px' height='80px' isGlow={true} />
          </SectionHeader>
          <SectionWrapper>
            <Section background='#373A40' textAlign='left'>
              <Img
                src={avatar}
                width='100%'
                alt='avatar'
              />
              <h5>Hello</h5>
              <p>I am Eggtronic, you can recognize me as a web engineer.</p>
              <p>Age: 25</p>
              <p>Location: Shanghai</p>
              <hr />
              <p>I am a mid-level programmer with good knowledge of full-stack techiques.
              I love learning new techiques and enjoying the progress of finding best solutions.
              I love refactoring my code to ensure it's as DRY as it can be. Also, I am a good team player,
              I love sharing fancy techniques and ideas. As the saying goes: 'two heads are better than one'.
            </p>
            </Section>
          </SectionWrapper>
        </BackWrapper>
      </FlipCard>
      <FlipCard
        height='100%'
        width='400px'
      >
        <FrontWrapper>
          <GlowIcon className='fas fa-graduation-cap' width='80px' height='80px' />
          <h1>Education</h1>
        </FrontWrapper>
        <BackWrapper>
          <SectionHeader>
            <GlowIcon className='fas fa-graduation-cap' width='80px' height='80px' isGlow={true} />
          </SectionHeader>
          <SectionWrapper>
            <Section background='#f38181'>
              <Img
                src={unimelb}
                alt='unimelb'
                width='70%'
                style={{ paddingTop: '10px' }}
              />
              <p>
                <i
                  style={{ verticalAlign: 'bottom' }}
                  className="fas fa-calendar-week"
                /> 2018 - 2020
              </p>
              <p>Master Degree</p>
              <p>Software Engineering</p>
            </Section>
            <Section background='#373A40'>
              <Img
                src={uniliverpool}
                alt='uniliverpool'
                width='70%'
                style={{ paddingTop: '10px' }}
              />
              <p>
                <i
                  style={{ verticalAlign: 'bottom' }}
                  className="fas fa-calendar-week"
                /> 2015 - 2017
              </p>
              <p>Bachelor Degree</p>
              <p>Software Development</p>
            </Section>
          </SectionWrapper>
        </BackWrapper>
      </FlipCard>
      <FlipCard height='100%' width='400px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-bolt' width='80px' height='80px' />
          <h1>Skill</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-bolt' width='80px' height='80px' isGlow={true} />
          </SectionHeader>
          <Progress
            percent={90}
            name='JavaScript'
            iconCode='\f3b8'
            iconFamily='Brands'
            iconWeight={400}
          />
          <Progress
            percent={80}
            name='Java'
            iconCode='\f4e4'
            iconFamily='Brands'
            iconWeight={400}
          />
          <Progress
            percent={90}
            name='React'
            iconCode='\f41b'
            iconFamily='Brands'
            iconWeight={400}
          />
          <Progress
            percent={75}
            name='Docker'
            iconCode='\f395'
            iconFamily='Brands'
            iconWeight={400}
          />
        </div>
      </FlipCard>
      <FlipCard height='100%' width='400px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-atom' width='80px' height='80px' />
          <h1>Experience</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-atom' width='80px' height='80px' isGlow={true} />
          </SectionHeader>
          <h1>React</h1>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='400px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-headphones-alt' width='80px' height='80px' />
          <h1>Music</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-headphones-alt' width='80px' height='80px' isGlow={true} />
          </SectionHeader>
          <Section background='white'>
            <Img src={monstercat} width='70%' alt='monstercat' />
            <br />
            <h1 style={{ color: 'black' }}>Monster Cat</h1>
            <br />
          </Section>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='400px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-video' width='80px' height='80px' />
          <h1>Film</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-video' width='80px' height='80px' isGlow={true} />
          </SectionHeader>
          <h1>Pacific Rim</h1>
        </div>
      </FlipCard>
      <FlipCard height='100%' width='400px'>
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
      <FlipCard height='100%' width='400px'>
        <FrontWrapper>
          <GlowIcon className='fas fa-gamepad' width='80px' height='80px' />
          <h1>Game</h1>
        </FrontWrapper>
        <div>
          <SectionHeader>
            <GlowIcon className='fas fa-gamepad' width='80px' height='80px' isGlow={true} />
          </SectionHeader>
          <h1>Dota2</h1>
        </div>
      </FlipCard>
    </AboutPageWrapper>
  );
}

export default AboutPage;
