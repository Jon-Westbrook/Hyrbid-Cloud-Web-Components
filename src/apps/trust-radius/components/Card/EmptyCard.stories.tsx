import React from 'react';

import EmptyCard from './EmptyCard';
import { Story } from '@storybook/react';

const stories = {
  component: EmptyCard,
  title: 'Trust Radius/Components/Slider/Card/EmptyCard',
};

const Template: Story = (args) => <EmptyCard {...args} />;

export const Default = Template.bind({});

export default stories;
