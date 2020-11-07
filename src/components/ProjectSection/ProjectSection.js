import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap, { TimelineLite, Linear } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  perspective: 1000;
  perspective-origin: center;
`;

const Section = styled.div`
  width: 0;
  height: 0;
  border-color: white;
  border-style: solid;
`;

function ProjectSectionWrapper({ children }) {
  const section = useRef(null);
  const section2 = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    const addScrollTrigger = () => {
      const tl2 = gsap.timeline();
      // yes, we can add it to an entire timeline!

      tl2
        .to(section.current, {
          scrollTrigger: {
            scroller: ".test",
            trigger: document.getElementsByClassName("section")[0],
            markers: true,
            pin: true,
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "+=1500", // end after scrolling 500px beyond the start
            scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
          rotationY: 660,
          width: 0,
          height: 0,
        })
        .to(section2.current, {
          scrollTrigger: {
            scroller: ".test",
            trigger: document.getElementsByClassName("section2")[0],
            markers: true,
            pin: true,
            start: "top top", // when the top of the trigger hits the top of the viewport
            end: "+=1500", // end after scrolling 500px beyond the start
            scrub: 0.5, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          },
          rotationY: 360,
          width: 1000,
          height: 1000,
        });
    };

    const tl = new TimelineLite();
    tl.to(section.current, {
      duration: 2,
      width: wrapper.current.clientWidth * 0.2,
      height: 0,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    })
      .to(section.current, {
        duration: 2,
        width: wrapper.current.clientWidth * 0.2,
        height: wrapper.current.clientHeight * 0.1,
        borderTopWidth: 3,
        borderBottomWidth: 3,
      })
      .to(section.current, {
        duration: 0.1,
        background: "white",
      })
      .to(section.current, {
        duration: 0.6,
        width: wrapper.current.clientWidth * 0.55,
        height: wrapper.current.clientHeight * 0.55,
        background: "rgba(255,255,255,0.5)",
        ease: Linear.easeNone,
      })
      .to(section.current, {
        duration: 0.6,
        width: wrapper.current.clientWidth * 0.9,
        height: wrapper.current.clientHeight * 0.9,
        background: "rgba(255,255,255,0)",
        borderRightWidth: 3,
        borderLeftWidth: 3,
        ease: Linear.easeNone,
      }).to(section.current, {
      duration: 1,
      width: wrapper.current.clientWidth,
      height: wrapper.current.clientHeight,
      ease: Linear.easeNone,
    }).to(section2.current, {
      duration: 1,
      width: wrapper.current.clientWidth,
      height: wrapper.current.clientHeight,
      ease: Linear.easeNone,
      onComplete: addScrollTrigger,
    });
  }, []);

  return (
    <Wrapper ref={wrapper} className="wrapper1">
      <Section className="section" ref={section}>
        {children}
      </Section>
      <Section className="section2" ref={section2}>
        {children}
      </Section>
    </Wrapper>
  );
}

export default ProjectSectionWrapper;
