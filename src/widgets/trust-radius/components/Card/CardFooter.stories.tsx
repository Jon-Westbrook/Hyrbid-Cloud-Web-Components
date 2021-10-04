import React from 'react';

import CardFooter, { CardFooterProps } from './CardFooter';
import { Story } from '@storybook/react';

const stories = {
  component: CardFooter,
  title: 'Trust Radius/Slider/Card/Footer',
};

const Template: Story<CardFooterProps> = (args) => <CardFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  firstName: 'John',
  lastName: 'Doe',
  jobTitle: 'Senior Digital Designer',
  companyName: 'Acme Inc.',
  industry: 'Science & Technology',
  companySize: '> 500',
};

export const MinimalData = Template.bind({});
MinimalData.args = {
  firstName: 'John',
  lastName: 'Doe',
};

export const IncompleteData = Template.bind({});
IncompleteData.args = {
  firstName: 'John',
  lastName: 'Doe',
  companyName: 'Acme Inc.',
  companySize: '< 100',
};

export default stories;
