import React from 'react';

import EmptyCard, { EmptyCardProps } from './EmptyCard';
import { Story } from '@storybook/react';

const stories = {
  component: EmptyCard,
  title: 'Trust Radius/Slider/Card/EmptyCard',
};

const Template: Story<EmptyCardProps> = (args) => (
  <EmptyCard css={{ maxWidth: '80px' }} {...args} />
);

export const Default = Template.bind({});
Default.args = { key: Math.random().toString() };

export default stories;
