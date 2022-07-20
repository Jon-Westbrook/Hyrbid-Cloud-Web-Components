import { Settings as SliderSettings } from 'react-slick';
import { CarbonBreakpoints } from '../../../types/carbon';

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
      return width >= CarbonBreakpoints.MD ? 2 : 1;
    case 3:
      if (width >= CarbonBreakpoints.LG) {
        return 3;
      } else if (width >= CarbonBreakpoints.MD) {
        return 2;
      } else {
        return 1;
      }
    case 4:
    default:
      if (width >= CarbonBreakpoints.LG) {
        return 4;
      } else if (width >= CarbonBreakpoints.MD) {
        return 2;
      } else {
        return 1;
      }
  }
}

const buildSliderSettings = (
  numberOfCards: number,
  width: number,
  trid: string,
  singleProduct: boolean,
): SliderSettings => {
  return {
    dots: true,
    dotsClass: `trust-radius-widget__slick-dots slick-dots-for-${trid}${
      singleProduct ? ' trust-radius-widget__slick-dots__single-product' : ''
    }`,
    infinite: true,
    speed: 500,
    autoplay: singleProduct ? false : true,
    autoplaySpeed: singleProduct ? 3000 : 10000,
    slidesToShow: determineSlidesDisplay(numberOfCards, width),
    slidesToScroll: determineSlidesDisplay(numberOfCards, width),
    nextArrow: undefined,
    prevArrow: undefined,
  };
};

export default buildSliderSettings;
