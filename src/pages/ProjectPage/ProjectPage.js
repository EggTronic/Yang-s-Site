import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import EggTap, { colors } from '../../assets/js/EggTap';

const ProjectPageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: calc(100vh - 164px);
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
    new EggTap(wrapper.current, colors);
  }, []);
  return (
    <ProjectPageWrapper ref={wrapper}>
    </ProjectPageWrapper>
  );
}

export default ProjectPage;
