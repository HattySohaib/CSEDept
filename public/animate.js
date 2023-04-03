import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const logo = document.querySelector("#logo");
const sub = document.querySelector(".sub");
const box = document.querySelector(".box");
const content = document.querySelector(".content");

const STT = new ScrollTimeline({
  scrollOffsets: [CSS.percent(0), CSS.percent(5)],
});

logo.animate(
  {
    scale: ["1", "0.3"],
    opacity: ["100", "10"],
  },
  {
    duration: 1,
    timeline: STT,
  }
);
sub.animate(
  {
    scale: ["1", "0.3"],
  },
  {
    duration: 1,
    timeline: STT,
  }
);
