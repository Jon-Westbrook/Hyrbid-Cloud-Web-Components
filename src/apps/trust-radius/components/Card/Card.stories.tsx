import React from 'react';

import Card, { CardProps } from './Card';
import { Story } from '@storybook/react';
import { CarbonThemes } from '../../../../types/carbon';
import store from '../../lib/redux/store';
import { AnyAction } from 'redux';
import { action as storybookAction } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

const fakeStore = Object.assign({}, store, {
  getState: () => ({ palette: { theme: CarbonThemes.WHITE } }),
  dispatch: (action: AnyAction): AnyAction => {
    storybookAction('dispatch');
    return action;
  },
});

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
Default.decorators = [
  (story) => <Provider store={fakeStore}>{story()}</Provider>,
];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
const grayFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({ palette: { theme: CarbonThemes.GRAY_10 } }),
});
Gray.decorators = [
  (story) => <Provider store={grayFakeStore}>{story()}</Provider>,
];

export const Dark = Template.bind({});
Dark.args = Object.assign({}, Default.args);
const darkFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({ palette: { theme: CarbonThemes.GRAY_100 } }),
});
Dark.decorators = [
  (story) => <Provider store={darkFakeStore}>{story()}</Provider>,
];

export default stories;
