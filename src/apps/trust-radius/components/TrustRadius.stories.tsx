import React from 'react';
import TrustRadius, { TrustRadiusOwnProps } from './TrustRadius';
import { Story } from '@storybook/react';
import { action as storybookAction } from '@storybook/addon-actions';
import { Provider } from 'react-redux';
import { AnyAction } from 'redux';
import store, { FetchStatusEnum } from '../lib/redux/store';

import apiResponse from './api-data-example.json';
import { normalizeProductData } from '../lib/redux/reducers/setProductReducer';
import { CarbonThemes } from '../../../types/carbon';

const products = {
  'fake-trid': normalizeProductData(apiResponse),
};
const defaultState = {
  status: { fetchStatus: FetchStatusEnum.READY },
  cols: { numCols: 4 },
  prods: { products },
  palette: { theme: CarbonThemes.WHITE },
};

const fakeStore = Object.assign({}, store, {
  getState: () => defaultState,
  dispatch: (action: AnyAction): AnyAction => {
    storybookAction('dispatch');
    return action;
  },
});

const stories = {
  component: TrustRadius,
  title: 'Trust Radius',
  argTypes: {
    palette: {
      type: { name: 'string', required: true },
      description:
        'Different color styles according to the IBM design guidelines.',
      control: { type: 'select', options: ['light', 'gray', 'dark'] },
    },
    trustRadiusId: {
      type: { name: 'string', required: true },
      description: 'The ID of the product in the Trust Radius platform',
    },
  },
};

const Template: Story<TrustRadiusOwnProps> = (args) => (
  <TrustRadius {...args} />
);

export const Default = Template.bind({});
Default.args = {
  useGoogleStars: false,
  trustRadiusId: 'fake-trid',
};
Default.decorators = [
  (story: any) => <Provider store={fakeStore}>{story()}</Provider>,
];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
const grayFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({
    ...defaultState,
    palette: { theme: CarbonThemes.GRAY_10 },
  }),
});
Gray.decorators = [
  (story: any) => <Provider store={grayFakeStore}>{story()}</Provider>,
];

export const Dark = Template.bind({});
Dark.args = Object.assign({}, Default.args);
const darkFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({
    ...defaultState,
    palette: { theme: CarbonThemes.GRAY_100 },
  }),
});
Dark.decorators = [
  (story: any) => <Provider store={darkFakeStore}>{story()}</Provider>,
];

export const TwoColumns = Template.bind({});
TwoColumns.args = Object.assign({}, Default.args);
const twoColsFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({
    ...defaultState,
    cols: { numCols: 2 },
  }),
});
TwoColumns.decorators = [
  (story) => <Provider store={twoColsFakeStore}>{story()}</Provider>,
];

export const OneColumn = Template.bind({});
OneColumn.args = Object.assign({}, Default.args);
const oneColFakeStore = Object.assign({}, fakeStore, {
  getState: () => ({
    ...defaultState,
    cols: { numCols: 1 },
  }),
});
OneColumn.decorators = [
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
