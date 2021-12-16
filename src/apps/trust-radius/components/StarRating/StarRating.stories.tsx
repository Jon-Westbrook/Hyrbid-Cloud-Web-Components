import React from 'react';

import StarRating, { StarRatingProps } from './StarRating';
import { Story } from '@storybook/react';

const stories = {
  component: StarRating,
  title: 'Trust Radius/Components/StarRating',
};

const Template: Story<StarRatingProps> = (args) => <StarRating {...args} />;

export const Default = Template.bind({});
Default.args = { starCount: 10, value: 3.4 };

export const FiveStarsFull = Template.bind({});
FiveStarsFull.args = { starCount: 5, value: 5 };

export const FiveStarsEmpty = Template.bind({});
FiveStarsEmpty.args = { starCount: 5, value: 0 };

export const FiveStarsHalf = Template.bind({});
FiveStarsHalf.args = { starCount: 5, value: 2.5 };

export const FiveStars224 = Template.bind({});
FiveStars224.args = { starCount: 5, value: 2.24 };

export const FiveStars226 = Template.bind({});
FiveStars226.args = { starCount: 5, value: 2.26 };

export const FiveStars374 = Template.bind({});
FiveStars374.args = { starCount: 5, value: 3.74 };

export const FiveStars376 = Template.bind({});
FiveStars376.args = { starCount: 5, value: 3.76 };

export default stories;
