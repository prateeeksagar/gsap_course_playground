import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotate: 360,
  background: "#ff5641",
  borderRadius: "50%",
  duration: 2,
  scale: 1.25,
  delay: 0.5,
  ease: "bounce.out",
  repeat: -1,
  yoyo: true,
});
