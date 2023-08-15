let crsr = document.querySelector("#cursor");
let blur = document.querySelector("#cursorBlur");
document.addEventListener("mousemove", (dets) => {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});

gsap.to("#nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main-container", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main-container",
    scroll: "body",
    // markers:true
    start: "top -20%",
    end: "top -75%",
    scrub: 1,
  },
});
