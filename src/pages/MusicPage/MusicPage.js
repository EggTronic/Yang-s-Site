import React, { useEffect } from 'react';
import styled from 'styled-components';

const MusicPageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  height: calc(100vh - 164px);
  width: 90vw;
  top: 100px;
  background: rgba(111,111,111,0.4);
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

function MusicPage() {
  useEffect(() => {
    const audio = document.getElementById('audio');
    audio.pause();
  }, []);
  return (
    <MusicPageWrapper>
      This is made by AIDN. I really love this idea and I am trying to recreate it! So Cool!
      <iframe
        src="https://aidn.jp/mikutap/"
        title="MikuTap"
        height="100%"
        width="99.8%"
      >
      </iframe>
    </MusicPageWrapper>
  );
}

export default MusicPage;
