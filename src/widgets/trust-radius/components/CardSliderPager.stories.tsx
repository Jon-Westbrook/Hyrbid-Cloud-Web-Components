import React from 'react';
import CardSliderPager, { CardSliderPagerProps } from './CardSliderPager';
import { Story } from '@storybook/react';

const stories = {
  component: CardSliderPager,
  title: 'Trust Radius/Slider/CardSliderPager',
};

const Template: Story<CardSliderPagerProps> = (args) => (
  <CardSliderPager {...args} />
);

export const Default = Template.bind({});
Default.args = {
  pageNumber: 1,
};

export default stories;
