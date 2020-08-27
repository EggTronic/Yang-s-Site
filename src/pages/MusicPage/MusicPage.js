import React from 'react';
import styled from 'styled-components';
import Cloud from '../../components/Cloud/Cloud';

const MusicPageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  min-height: calc(100vh - 164px);
  width: 90vw;
  top: 100px;
  background: rgba(111,111,111,0.4);
`;

function MusicPage() {
  return (
    <MusicPageWrapper>
      <Cloud />
      Music;
    </MusicPageWrapper>
  );
}

export default MusicPage;
