class HeadingAnimation {
  constructor(
      elementSelector,
      timer,
      classForActivate,
      property,
      delay = 0
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = delay;

    this.prepareText();
  }

  createElement(letter, i) {
    let delay = 0;

    if (i % 3 === 0) {
      delay = 0;
    } else if (i % 3 === 1) {
      delay = 300;
    } else {
      delay = 150;
    }
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset + delay}ms`;
    span.style.verticalAlign = `sub`;
    if (i % 3 === 2) {
      this._timeOffset += 50;
    }
    return span;
  }

  prepareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((word)=>word !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, letter, i) => {
        fragment.appendChild(this.createElement(letter, i));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`animated-word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}

export const animateHeading = (selector, time, delay) => {
  const animationTopScreenTextLine = new HeadingAnimation(selector, time, `active`, `transform`, delay);
  setTimeout(()=>{
    animationTopScreenTextLine.runAnimation();
  }, 500);
};
