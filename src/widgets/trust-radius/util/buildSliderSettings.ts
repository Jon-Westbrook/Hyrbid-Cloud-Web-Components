import { Settings as SliderSettings } from 'react-slick';

const buildSliderSettings = (width: number): SliderSettings => {
  let slidesToShowAndScroll;

  if (width >= 1312) {
    slidesToShowAndScroll = 4;
  } else if (width >= 672) {
    slidesToShowAndScroll = 2;
  } else {
    slidesToShowAndScroll = 1;
  }
  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShowAndScroll,
    slidesToScroll: slidesToShowAndScroll,
    nextArrow: undefined,
    prevArrow: undefined,
  };
};

export default buildSliderSettings;
