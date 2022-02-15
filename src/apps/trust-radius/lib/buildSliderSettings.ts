import { Settings as SliderSettings } from 'react-slick';

enum Breakpoint {
  SM = 320,
  MD = 672,
  LG = 1312,
}

/**
 * Determine number of slides to display based on
 * total number of slides and the viewport width
 * @param {number} numberOfCards
 * @param {number} width
 * @returns number
 */
function determineSlidesDisplay(numberOfCards: number, width: number) {
  switch (numberOfCards) {
    case 1:
      return 1;
    case 2:
      return width >= Breakpoint.MD ? 2 : 1;
    case 3:
      if (width >= Breakpoint.LG) {
        return 3;
      } else if (width >= Breakpoint.MD) {
        return 2;
      } else {
        return 1;
      }
    case 4:
    default:
      if (width >= Breakpoint.LG) {
        return 4;
      } else if (width >= Breakpoint.MD) {
        return 2;
      } else {
        return 1;
      }
  }
}

const buildSliderSettings = (
  numberOfCards: number,
  width: number,
): SliderSettings => {
  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: determineSlidesDisplay(numberOfCards, width),
    slidesToScroll: determineSlidesDisplay(numberOfCards, width),
    nextArrow: undefined,
    prevArrow: undefined,
  };
};

export default buildSliderSettings;
