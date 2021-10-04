import React, { PropsWithChildren } from 'react';
import CardSliderDots, { CardSliderDotsProps } from './CardSliderDots';
import { Story } from '@storybook/react';

const stories = {
  component: CardSliderDots,
  title: 'Trust Radius/Slider/CardSliderDots',
};

const Template: Story<PropsWithChildren<CardSliderDotsProps>> = (args) => (
  <CardSliderDots {...args} />
);

export const Default = Template.bind({});
Default.args = {
  numRows: 1,
};

export default stories;
