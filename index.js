gsap.set('.fourofour2', { rotateZ: -5 });

const tl = gsap.timeline({ 
  repeat: -1, 
  delay: 1,
  defaults: {
    duration: 1,
    ease: "none"
  }
});

tl.to('.fourofour2', { rotateZ: 5 }, 0);
tl.to('.fourofour2', { rotateZ: -5 }, '<');
