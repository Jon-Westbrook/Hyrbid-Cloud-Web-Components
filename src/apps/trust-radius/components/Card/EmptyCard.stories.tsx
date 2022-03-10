import React from 'react';

import EmptyCard from './EmptyCard';
import { Meta, Story } from '@storybook/react';

const stories: Meta = {
  component: EmptyCard,
  title: 'Widgets/Trust Radius/Components/Slider/Card/EmptyCard',
};

const Template: Story = (args) => <EmptyCard {...args} />;

export const Default = Template.bind({});

export default stories;
