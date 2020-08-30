import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import EggTap, { colors } from '../../assets/js/EggTap';

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
    const eggTap = new EggTap(wrapper.current, colors);
    return () => eggTap.clear();
  }, []);
  return (
    <ProjectPageWrapper ref={wrapper}>
      Here is my recreation of mikutap -> in progress :D
    </ProjectPageWrapper>
  );
}

export default ProjectPage;
