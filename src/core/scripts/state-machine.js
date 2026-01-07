const STATES = ["impact", "deceleration", "navigation"];
let index = 0;

function setState(next) {
  document.body.classList.remove(
    "state-impact",
    "state-deceleration",
    "state-navigation"
  );

  document.body.classList.add(`state-${next}`);

  // lock scroll only for impact
  if (next === "impact") {
    document.body.classList.add("is-locked");
  } else {
    document.body.classList.remove("is-locked");
  }
}

export function advanceState() {
  if (index >= STATES.length - 1) return;
  index++;
  setState(STATES[index]);
}

export function initStateMachine() {
  setState(STATES[index]);
}
