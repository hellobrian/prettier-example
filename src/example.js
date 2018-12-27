$("#speedPercent").on("input", event => {
  $(".output").value = event.target.value + "%";
});

$("#grid").on("click", event => {
  if (event.target && event.target.matches("button.banana")) {
    const points = parseInt(event.target.dataset.points, 10);
    state = { ...state, score: state.score + points };
    setScoreInnerHTML(state);

    const span = event.target.querySelector("span");
    span.classList.add("exit-animation");
    span.on("animationend", () => {
      event.target.parentNode.removeChild(event.target);
    });
  }
});

const mutationObserver = observer(state);
mutationObserver.observe($("#grid"), {
  attributes: false,
  childList: true,
  subtree: true
});
