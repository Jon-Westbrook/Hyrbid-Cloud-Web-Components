import CardBody, { CardBodyProps } from './CardBody';
import { Meta, Story } from '@storybook/react';
import storyWithTranslation from '../../lib/storyWithTranslation';

const stories: Meta = {
  component: CardBody,
  title: 'Widgets/Trust Radius/Components/Slider/Card/Body',
  decorators: [storyWithTranslation()],
};

const Template: Story<CardBodyProps> = (args) => <CardBody {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers.',
  rating: 5,
  createdDate: '2021-04-16T02:06:58.757Z',
  maxLines: 7,
};

export const Truncated = Template.bind({});
Truncated.args = {
  ...Default.args,
  text: 'Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers. Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers. Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers.',
  rating: 0,
  maxLines: 1,
};

export const EmptyDate = Template.bind({});
EmptyDate.args = { ...Default.args, createdDate: undefined };

export const InvalidDate = Template.bind({});
InvalidDate.args = {
  ...Default.args,
  createdDate: 'I am an invalid createdDate string',
};

export default stories;
