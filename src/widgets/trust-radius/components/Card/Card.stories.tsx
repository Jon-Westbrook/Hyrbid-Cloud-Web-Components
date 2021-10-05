import React from 'react';

import Card, { CardProps } from './Card';
import { Story } from '@storybook/react';

const stories = {
  component: Card,
  title: 'Trust Radius/Slider/Card',
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  review: {
    quotes: [
      {
        review: {
          slug: 'ibm-cloud-virtual-servers-2021-04-12-03-26-07',
          heading: 'IBM Cloud Virtual Servers Review',
          modified: '2021-04-16T02:06:58.757Z',
          name: 'Product name',
          count: 100,
          score: 9.002,
        },
        rating: 9,
        text:
          'Always suited for our Web Servers, where moving to Cloud to meet demands and get back to our standard in house servers when demand is reduced.',
      },
    ],
    name: { first: 'John', last: 'Doe' },
    company: {
      industry: { name: 'Insurance' },
      name: 'Am-Ex Insurance Brokers (India) Pvt Ltd',
      size: '11-50 employees',
    },
    position: { title: 'Manager - IT' },
  },
};

export default stories;
