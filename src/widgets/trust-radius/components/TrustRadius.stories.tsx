import React from 'react';
import TrustRadius, { TrustRadiusOwnProps } from './TrustRadius';
import { Story } from '@storybook/react';
import { action as storybookAction } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import store, { FetchStatusEnum } from '../lib/redux/store';

import apiResponse from './api-data-example.json';
import { normalizeProductData } from '../lib/redux/reducers/setProductReducer';

const products = {
  'fake-trid': normalizeProductData(apiResponse),
};
const defaultState = {
  status: { fetchStatus: FetchStatusEnum.READY },
  cols: { numCols: 4 },
  prods: { products },
};

const fakeStore = Object.assign({}, store, {
  getState: () => defaultState,
});

const stories = {
  component: TrustRadius,
  title: 'Trust Radius',
  decorators: [
    (story: any) => <Provider store={fakeStore}>{story()}</Provider>,
  ],
};

const Template: Story<TrustRadiusOwnProps> = (args) => (
  <TrustRadius {...args} />
);

export const Default = Template.bind({});
Default.args = {
  palette: 'light',
  useGoogleStars: false,
  trustRadiusId: 'fake-trid',
};

export const DarkPalette = Template.bind({});
DarkPalette.args = Object.assign({}, Default.args);
DarkPalette.args.palette = 'dark';

export const TwoCols = Template.bind({});
TwoCols.args = Object.assign({}, Default.args);
const twoColsFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({
    ...defaultState,
    cols: { numCols: 2 },
  }),
});
TwoCols.decorators = [
  (story) => <Provider store={twoColsFakeStore}>{story()}</Provider>,
];

export const OneCol = Template.bind({});
OneCol.args = Object.assign({}, Default.args);
const oneColFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({
    ...defaultState,
    cols: { numCols: 1 },
  }),
});
OneCol.decorators = [
  (story) => <Provider store={oneColFakeStore}>{story()}</Provider>,
];

export const Loading = Template.bind({});
Loading.args = Object.assign({}, Default.args);
const loadingFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({
    ...defaultState,
    status: { fetchStatus: FetchStatusEnum.IN_PROGRESS },
  }),
});
Loading.decorators = [
  (story) => <Provider store={loadingFakeStore}>{story()}</Provider>,
];

export const FailedRequest = Template.bind({});
const failedFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({
    ...defaultState,
    status: { fetchStatus: FetchStatusEnum.FAILURE },
  }),
});
FailedRequest.decorators = [
  (story) => <Provider store={failedFakeStore}>{story()}</Provider>,
];
FailedRequest.args = Object.assign({}, Default.args);

export default stories;
