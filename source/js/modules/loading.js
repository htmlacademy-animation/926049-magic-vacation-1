export const initLoading = () => {
  const body = document.querySelector(`body`);
  window.addEventListener(`DOMContentLoaded`, () => {
    console.log(`loaded`);
    body.classList.add(`body--loaded`);
  });
};
