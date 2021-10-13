import React from 'react';
import { PureCardSlider as CardSlider, CardSliderProps } from './CardSlider';
import { Story } from '@storybook/react';
import { action, action as storybookAction } from '@storybook/addon-actions';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import buildSliderSettings from '../lib/buildSliderSettings';
import { CarbonThemes } from '../../../types/carbon';
import store from '../lib/redux/store';
import { AnyAction } from 'redux';
import { Provider } from 'react-redux';

const fakeStore = Object.assign({}, store, {
  getState: () => ({ palette: { theme: CarbonThemes.WHITE } }),
  dispatch: (action: AnyAction): AnyAction => {
    storybookAction('dispatch');
    return action;
  },
});

const stories = {
  component: CardSlider,
  title: 'Trust Radius/Slider',
};

const Template: Story<CardSliderProps> = (args) => <CardSlider {...args} />;

export const Default = Template.bind({});
const quote = {
  review: {
    heading: 'Review Heading',
    modified: '2021-09-30T14:49:38.066Z',
    slug: '',
    name: 'Product name at IBM',
    count: 234,
    score: 9,
  },
  rating: 9,
  text: 'Lorem ipsum dolor',
};
const review = {
  quotes: [quote, quote],
  name: { first: 'John', last: 'Doe' },
  position: { title: 'IT Manager' },
};
const sliderSettings = buildSliderSettings(4);
sliderSettings.appendDots = (dots) => {
  return (
    <CardSliderDots
      numRows={8}
      onPrevious={action('previous')}
      onNext={action('next')}
    >
      {dots}
    </CardSliderDots>
  );
};
sliderSettings.customPaging = (i) => <CardSliderPager pageNumber={i} />;
Default.args = {
  reviews: [review, review, review, review, review],
  product: {
    heading: 'Product Heading',
    modified: '2021-09-30T14:49:38.066Z',
    name: 'Product name at IBM',
    count: 8,
    score: 0.23,
    slug: 'this-is-a-slug',
  },
  stars: true,
  sliderSettings,
  setCustomSlider: (slider) => undefined,
};
Default.decorators = [
  (story) => <Provider store={fakeStore}>{story()}</Provider>,
];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
const grayFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({ palette: { theme: CarbonThemes.GRAY_10 } }),
});
Gray.decorators = [
  (story) => <Provider store={grayFakeStore}>{story()}</Provider>,
];

export const Dark = Template.bind({});
Dark.args = Object.assign({}, Default.args);
const darkFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({ palette: { theme: CarbonThemes.GRAY_100 } }),
});
Dark.decorators = [
  (story) => <Provider store={darkFakeStore}>{story()}</Provider>,
];

export const TwoCols = Template.bind({});
TwoCols.args = Object.assign({}, Default.args);
TwoCols.decorators = Array.from(Default.decorators);
TwoCols.args.stars = false;
TwoCols.args.sliderSettings = {
  ...sliderSettings,
  slidesToShow: 2,
  slidesToScroll: 2,
};

export const OneCols = Template.bind({});
OneCols.args = Object.assign({}, Default.args);
OneCols.decorators = Array.from(Default.decorators);
OneCols.args.stars = false;
OneCols.args.sliderSettings = {
  ...sliderSettings,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default stories;
