import React from 'react';
import CardBody, { CardBodyProps } from './CardBody';
import { Story } from '@storybook/react';

const stories = {
  component: CardBody,
  title: 'Trust Radius/Slider/Card/Body',
};

const Template: Story<CardBodyProps> = (args) => <CardBody {...args} />;

export const Default = Template.bind({});
Default.args = {
  text:
    'Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers.',
  rating: 9,
  date: '2021-04-16T02:06:58.757Z',
  maxLines: 7,
};

export const Truncated = Template.bind({});
Truncated.args = {
  ...Default.args,
  text:
    'Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers. Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers. Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers.',
  rating: 0,
  maxLines: 1,
};

export const EmptyDate = Template.bind({});
EmptyDate.args = { ...Default.args, date: undefined };

export const InvalidDate = Template.bind({});
InvalidDate.args = { ...Default.args, date: 'I am an invalid date string' };

export default stories;
