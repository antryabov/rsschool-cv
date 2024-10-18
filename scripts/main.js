'use strict';
const windowWidth = window.innerWidth;

const sliderWrapper = document.querySelector('.main__slider-wrapper');
const main = document.querySelector('.main');
const mainStyles = window.getComputedStyle(main);
const sliderControl = document.querySelector('.main__slider-control');

sliderControl.style.width =
  windowWidth - parseInt(mainStyles.paddingRight) * 2 + 'px';

const slider = document.querySelector('.main__slider-info');
slider.style.width = windowWidth * slider.children.length + 'px';

Array.from(slider.children).forEach(
  (section) => (section.style.width = windowWidth + 'px')
);

const sliderPrev = document.querySelector('.slider-control__prev');
const sliderNext = document.querySelector('.slider-control__next');

let sliderСounter = 0;
const numberOfBlocks = slider.children.length - 1;

function visibleButtonFunc() {
  switch (sliderСounter) {
    case 0:
      sliderPrev.style.visibility = 'hidden';
      break;
    case 1:
      sliderPrev.style.visibility = 'visible';
      sliderNext.style.visibility = 'visible';
      break;
    case 2:
      sliderNext.style.visibility = 'hidden';
      break;
  }
}

function nextBlock() {
  if (sliderСounter < numberOfBlocks) {
    sliderСounter++;
    slider.style.transform = `translateX(-${windowWidth * sliderСounter}px)`;
  }
  visibleButtonFunc();
}

function prevBlock() {
  let translate = slider.style.transform;
  let parseTranslate = parseInt(translate.split('-')[1]) * -1;

  if (parseTranslate < 0) {
    sliderСounter--;
    parseTranslate += windowWidth;
    console.log(parseTranslate);
    slider.style.transform = `translateX(${parseTranslate}px)`;
  }
  visibleButtonFunc();
}

sliderPrev.addEventListener('click', prevBlock);
sliderNext.addEventListener('click', nextBlock);

(() => {
  visibleButtonFunc();
})();
