import React from 'react';
import styled from 'styled-components';

const HomePageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  min-height: 80vh;
  width: 90vw;
  top: 130px;
  background: rgba(111,111,111,0.4);
`;

function HomePage() {
  return (
    <HomePageWrapper>
      Hello, this is EggTronic
    </HomePageWrapper>
  );
}

export default HomePage;
