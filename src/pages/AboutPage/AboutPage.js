import React from 'react';
import styled from 'styled-components';

const AboutPageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  min-height: calc(100vh - 164px);
  width: 90vw;
  top: 100px;
  background: rgba(111,111,111,0.4);
`;

function AboutPage() {
  return (
    <AboutPageWrapper>
      About
    </AboutPageWrapper>
  );
}

export default AboutPage;
