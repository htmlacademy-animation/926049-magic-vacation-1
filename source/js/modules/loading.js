export const initLoading = () => {
  const body = document.querySelector(`body`);
  window.addEventListener(`DOMContentLoaded`, () => {
    body.classList.add(`body--loaded`);
  });
};
