import gsap, { Linear, TimelineMax } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const fadeIn = (element) => {
  gsap.to(element, {
    duration: 1.2,
    opacity: 1,
    ease: "power4.out",
    stagger: {
      amount: 0.3,
    },
  });
};

export const fadeOut = (element) => {
  gsap.to(element, {
    duration: 1.2,
    opacity: 0,
    ease: "power4.out",
  });
};

export const TeleportIn = (element, wrapper, callback) => {
  element.style.display = 'block';
  new TimelineMax()
    .to(element, {
      duration: 1,
      width: 0,
      height: 0,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    })
    .to(element, {
      duration: 2,
      width: wrapper.clientWidth * 0.2,
      height: 0,
      borderTopWidth: 1,
      borderBottomWidth: 1,
    })
    .to(element, {
      duration: 2,
      width: wrapper.clientWidth * 0.2,
      height: wrapper.clientHeight * 0.1,
      borderTopWidth: 3,
      borderBottomWidth: 3,
      background: "rgba(255,255,255,0.1)",
    })
    .to(element, {
      duration: 0.1,
      background: "white",
    })
    .to(element, {
      duration: 0.6,
      width: wrapper.clientWidth * 0.55,
      height: wrapper.clientHeight * 0.55,
      background: "rgba(255,255,255,0.5)",
      ease: Linear.easeNone,
    })
    .to(element, {
      duration: 0.6,
      width: wrapper.clientWidth * 0.9,
      height: wrapper.clientHeight * 0.9,
      background: "transparent",
      borderRightWidth: 3,
      borderLeftWidth: 3,
      borderColor: "rgba(255,255,255,1)",
    })
    .to(element, {
      duration: 4,
      width: wrapper.clientWidth,
      height: wrapper.clientHeight,
      borderColor: "rgba(255,255,255,0.5)",
      onComplete: callback
    });
};

export const TeleportOut = (element, wrapper, callback) => {
  new TimelineMax()
    .to(element, {
      duration: 0.6,
      background:"rgba(255,255,255,0.7)",
      ease: Linear.easeNone,
    })
    .to(element, {
      duration: 2,
      height: wrapper.clientHeight * 0,
      background:"rgba(255,255,255,0.7)",
      borderColor: "rgba(255,255,255,1)",
      borderWidth: 1,
      ease: Linear.easeNone,
    })
    .to(element, {
      duration: 2,
      width: 0,
      height: 0,
      borderWidth: 0,
      onComplete: callback
    })
};
