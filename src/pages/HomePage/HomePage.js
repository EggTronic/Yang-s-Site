import React from 'react';
import styled from 'styled-components';
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
`;

const LeftWrapper = styled.div`
  background-image: ${'url(' + logo + ')'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;   
  position: relative;
  width:  40vw;
  min-width: 600px;
  height: calc(90% - 24.4px);
`;

const RightWrapper = styled.div`
  width:  40vw;
  min-width: 600px;
  height: calc(90% - 24.4px);
  display: flex;
  justify-content: center;
  align-items: center;
`

function HomePage() {
  return (
    <HomePageWrapper>
      <LeftWrapper>
        <h2>Hello, this is EggTronic</h2>
        
      </LeftWrapper>
      <RightWrapper>
        <Cube />
      </RightWrapper>
    </HomePageWrapper>
  );
}

export default HomePage;
