import {animateHeading} from './heading-animation';

const title = document.querySelector(`.intro__title`);
const info = document.querySelector(`.intro__info`);

export default () => {
  animateHeading(`.intro__title`, 500);
  animateHeading(`.intro__date`, 500, 300);

  if (info) {
    setTimeout(() => {
      info.classList.add(`active`);
    }, 1200);
  }
};
