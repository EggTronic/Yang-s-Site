import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { TeleportIn, TeleportOut } from "../../utils";


const Wrapper = styled.div`
  width: 90vw;
  height: calc(99vh - 164px);
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  perspective: 1000;
  position: relative;
`;

const Section = styled.div`
  width: 0;
  height: 0;
  border-color: white;
  border-style: solid;
  border-width: 0;
  position: absolute;
`;

const Control = styled.button`
  position: absolute;
  height: 20px;
  width: 20px;
  background: white;
  z-index: 1;
`;

const ForwardBtn = styled(Control)`
  right: 20px;
`;

const BackwardBtn = styled(Control)`
  left: 20px;
`;

const sectionClass = "project-section";

function ProjectSectionWrapper({ children }) {
  const [index, setIndex] = useState(0);
  const wrapper = useRef(null);

  useEffect(() => {
    const sectionArray = document.getElementsByClassName(sectionClass);
    wrapper.current.sectionArray = sectionArray;
    TeleportIn(sectionArray[index], wrapper.current);
  }, [index]);

  const forward = () => {
    const sectionArray = wrapper.current.sectionArray;
    if (!sectionArray || index >= sectionArray.length - 1) return;
    TeleportOut(sectionArray[index], wrapper.current);
    setIndex((i) => i + 1);
  };

  const backward = () => {
    const sectionArray = wrapper.current.sectionArray;
    if (!sectionArray || index <= 0) return;
    TeleportOut(sectionArray[index], wrapper.current);
    setIndex((i) => i - 1);
  };

  return (
    <Wrapper ref={wrapper}>
      <ForwardBtn onClick={forward} />
      <BackwardBtn onClick={backward} />
      <Section className={sectionClass}>{children}</Section>
      <Section className={sectionClass}>{children}</Section>
      {/* <Section className="section2" ref={section2}>
        {children}
      </Section> */}
    </Wrapper>
  );
}

export default ProjectSectionWrapper;
