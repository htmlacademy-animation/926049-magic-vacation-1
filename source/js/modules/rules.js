const lastRule = document.querySelector(`.rules__item:last-of-type`);

export default () => {
  const goBtn = document.querySelector(`.rules__link`);
  if (lastRule && goBtn) {
    lastRule.addEventListener(`animationend`, () => {
      goBtn.classList.add(`active`);
    });
  }
};
