import React from 'react';
import styled from 'styled-components';

const ProjectPageWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  min-height: 80vh;
  width: 90vw;
  top: 130px;
  background: rgba(111,111,111,0.4);
`;

function ProjectPage() {
  return (
    <ProjectPageWrapper>
      Project
    </ProjectPageWrapper>
  );
}

export default ProjectPage;
