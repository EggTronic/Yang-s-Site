import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProjectPageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: calc(99vh - 164px);
  width: 90vw;
  top: 100px;
  background: rgba(111,111,111,0.4);
  display: flex;
  flex-wrap: wrap;
  canvas {
    display: block;
  }
`;


function ProjectPage() {
  const wrapper = useRef(null);
  useEffect(() => {
    const audio = document.getElementById('audio');
    audio.pause();
  }, []);
  return (
    <ProjectPageWrapper ref={wrapper}>
      Here is my recreation of mikutap -> in progress :D
      <iframe
        src="https://eggtronic.github.io/EggTap/"
        title="EggTap"
        height="100%"
        width="99.8%"
      >
      </iframe>
    </ProjectPageWrapper>
  );
}

export default ProjectPage;
