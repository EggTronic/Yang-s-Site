import React, { useEffect } from "react";
import styled from "styled-components";
import ProjectSection from "../../components/ProjectSection/ProjectSection";

const ProjectPageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: calc(99vh - 164px);
  width: 90vw;
  top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  overflow-x:hidden;
  canvas {
    display: block;
  }
`;

function ProjectPage() {
  useEffect(() => {
    // const audio = document.getElementById('audio');
    // audio.pause();
  }, []);
  return (
    <ProjectPageWrapper>
      <ProjectSection>
        {/* <iframe
          src="https://eggtronic.github.io/EggTap/"
          title="EggTap"
          height="100%"
          width="30%"
        ></iframe> */}
      </ProjectSection>
    </ProjectPageWrapper>
  );
}

export default ProjectPage;
