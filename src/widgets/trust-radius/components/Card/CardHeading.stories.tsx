import React from 'react';

import CardHeading, { CardHeadingProps } from './CardHeading';
import { Story } from '@storybook/react';

const stories = {
  component: CardHeading,
  title: 'Trust Radius/Slider/Card/Heading',
};

const Template: Story<CardHeadingProps> = (args) => <CardHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Foo is the bar',
};

export const Empty = Template.bind({});
Empty.args = {
  text: '',
};

export const LongText = Template.bind({});
LongText.args = {
  text:
    'Dolore possimus et rerum excepturi odio. Saepe dolorum voluptatem accusamus consequatur. Eos deleniti voluptas quia quaerat quod architecto ducimus et. Possimus quae quidem non accusantium facere non enim. Voluptas qui corporis recusandae et et magnam fugit.',
};

export default stories;