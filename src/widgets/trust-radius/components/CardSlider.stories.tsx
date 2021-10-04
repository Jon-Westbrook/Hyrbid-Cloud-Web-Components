import React from 'react';
import CardSlider, { CardSliderProps } from './CardSlider';
import { Story } from '@storybook/react';
import CardSliderDots from './CardSliderDots';
import CardSliderPager from './CardSliderPager';

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
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  appendDots: (dots: string) => (
    <CardSliderDots numRows={2}>{dots}</CardSliderDots>
  ),
  customPaging: (i: number) => <CardSliderPager pageNumber={i} />,
};
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
  stars: 'true',
  theme: 'light',
  sliderSettings,
};

export const FourCols = Template.bind({});
FourCols.args = Object.assign({}, Default.args);
FourCols.args.sliderSettings = {
  ...sliderSettings,
  slidesToShow: 4,
  slidesToScroll: 2,
};

export default stories;
