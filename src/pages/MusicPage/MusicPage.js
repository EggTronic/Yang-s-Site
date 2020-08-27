import React from 'react';
import styled from 'styled-components';

const MusicPageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: calc(100vh - 164px);
  width: 90vw;
  top: 100px;
  background: rgba(111,111,111,0.4);
`;

function MusicPage() {
  return (
    <MusicPageWrapper>
      This is made by AIDN. I really love this idea and I am trying to recreate it! So Cool!
      <iframe
        src="https://aidn.jp/mikutap/"
        title="MikuTap"
        height="100%"
        width="100%"
      >
      </iframe>
    </MusicPageWrapper>
  );
}

export default MusicPage;
