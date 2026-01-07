import { advanceState } from "./state-machine.js";

let triggered = false;

function triggerAdvance() {
  if (triggered) return;
  triggered = true;
  advanceState();
}

// /* SCROLL */
// window.addEventListener(
//   "wheel",
//   (e) => {
//     if (e.deltaY > 10) triggerAdvance();
//   },
//   { passive: true }
// );

/* CLICK / TAP */
window.addEventListener("pointerdown", triggerAdvance);

/* KEYBOARD */
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") triggerAdvance();
});
