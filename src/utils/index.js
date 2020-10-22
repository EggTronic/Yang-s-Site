import gsap from 'gsap';

export const fadeIn = element => {
  gsap.to(element, 1.2, {
    opacity: 1,
    ease: "power4.out",
    stagger: {
      amount: 0.3
    }
  })
};

export const fadeOut = element => {
  gsap.to(element, 1.2, {
    opacity: 0,
    ease: "power4.out"
  })
};