import React, { PropsWithChildren } from 'react';
import SliderHeading, { SliderHeadingProps } from './SliderHeading';
import { Meta, Story } from '@storybook/react';

const stories: Meta = {
  component: SliderHeading,
  title: 'Trust Radius/Components/Slider/Slider Heading',
};

const Template: Story<PropsWithChildren<SliderHeadingProps>> = (args) => (
  <SliderHeading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <span>This is a heading</span>,
};

export default stories;
