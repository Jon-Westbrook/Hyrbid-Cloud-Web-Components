import { Settings as SliderSettings } from 'react-slick';

const buildSliderSettings = (numCols: 1 | 2 | 4): SliderSettings => {
  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numCols,
    slidesToScroll: numCols,
    nextArrow: undefined,
    prevArrow: undefined,
  };
};

export default buildSliderSettings;
