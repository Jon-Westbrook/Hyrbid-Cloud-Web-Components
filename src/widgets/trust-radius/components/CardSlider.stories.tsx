import React from 'react';
import CardSlider, { CardSliderProps } from './CardSlider';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';
import buildSliderSettings from '../lib/buildSliderSettings';

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
    modified: '2021-09-30T14:49:38.066Z',
    name: 'Product name at IBM',
    count: 8,
    score: 0.23,
    slug: 'this-is-a-slug',
  },
  stars: true,
  theme: 'light',
  sliderSettings,
};

export const TwoCols = Template.bind({});
TwoCols.args = Object.assign({}, Default.args);
TwoCols.args.stars = false;
TwoCols.args.sliderSettings = {
  ...sliderSettings,
  slidesToShow: 2,
  slidesToScroll: 2,
};

export default stories;
