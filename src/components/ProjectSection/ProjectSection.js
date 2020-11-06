import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TimelineLite, Linear } from "gsap";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
  width: 0;
  height: 0;
  border-color: white;
  border-style: solid;
`;

function ProjectSectionWrapper({ children }) {
  const wrapper = useRef(null);
  useEffect(() => {
    const tl = new TimelineLite();
    tl.to(wrapper.current, {
      duration: 2,
      width: "20%",
      height: "0%",
      borderTopWidth: 1,
      borderBottomWidth: 1,
    })
      .to(wrapper.current, {
        duration: 2,
        width: "20%",
        height: "10%",
        borderTopWidth: 3,
        borderBottomWidth: 3,
      })
      .to(wrapper.current, {
        duration: 0.1,
        background: "white",
      })
      .to(wrapper.current, {
        duration: 0.6,
        width: "55%",
        height: "50%",
        background: "rgba(255,255,255,0.5)",
        ease: Linear.easeNone,
      })
      .to(wrapper.current, {
        duration: 0.6,
        width: "90%",
        height: "90%",
        background: "rgba(255,255,255,0)",
        borderRightWidth: 3,
        borderLeftWidth: 3,
        ease: Linear.easeNone,
      })
      .to(wrapper.current, {
        duration: 3,
        width: "100%",
        height: "100%",
        ease: Linear.easeNone,
      });

    const tl2 = new TimelineLite();

    tl2.to(wrapper.current, {
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top center",
        markers: true,
        toggleActions: "restart pause reverse pause",
      },
      y: 0,
      rotation: 360,
      duration: 3,
    });
  }, []);

  return (
    <Wrapper className="test">
      <Section ref={wrapper}>{children}</Section>
    </Wrapper>
  );
}

export default ProjectSectionWrapper;
