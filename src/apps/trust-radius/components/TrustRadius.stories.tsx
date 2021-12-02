import React from 'react';
import TrustRadius, { TrustRadiusOwnProps } from './TrustRadius';
import { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { FetchStatusEnum } from '../lib/redux/store';
import fakeStore, { overrideFakeStore } from '../lib/redux/fakeStore';

import { CarbonThemes } from '../../../types/carbon';
import storyWithTranslation from '../lib/storyWithTranslation';

const stories: Meta = {
  component: TrustRadius,
  title: 'Trust Radius/Components',
  decorators: [storyWithTranslation()],
};

const Template: StoryFn<TrustRadiusOwnProps> = (args) => (
  <TrustRadius {...args} />
);

export const Default = Template.bind({});
Default.args = {
  useGoogleStars: false,
  trustRadiusId: 'fake-trid',
};
Default.decorators = [
  (story) => <Provider store={fakeStore()}>{story()}</Provider>,
];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
Gray.decorators = [
  (story) => (
    <Provider
      store={overrideFakeStore({
        themeOverride: CarbonThemes.GRAY_10,
      })}
    >
      {story()}
    </Provider>
  ),
];

export const Dark = Template.bind({});
Dark.args = Object.assign({}, Default.args);
Dark.decorators = [
  (story) => (
    <Provider
      store={overrideFakeStore({
        themeOverride: CarbonThemes.GRAY_100,
      })}
    >
      {story()}
    </Provider>
  ),
];

export const TwoColumns = Template.bind({});
TwoColumns.args = Object.assign({}, Default.args);
TwoColumns.decorators = [
  (story) => (
    <Provider store={overrideFakeStore({ numColsOverrides: 2 })}>
      {story()}
    </Provider>
  ),
];

export const OneColumn = Template.bind({});
OneColumn.args = Object.assign({}, Default.args);
OneColumn.decorators = [
  (story) => (
    <Provider store={overrideFakeStore({ numColsOverrides: 1 })}>
      {story()}
    </Provider>
  ),
];

export const Loading = Template.bind({});
Loading.args = Object.assign({}, Default.args);
Loading.decorators = [
  (story) => (
    <Provider
      store={overrideFakeStore({
        statusOverrides: FetchStatusEnum.IN_PROGRESS,
      })}
    >
      {story()}
    </Provider>
  ),
];

export const FailedRequest = Template.bind({});
FailedRequest.decorators = [
  (story) => (
    <Provider
      store={overrideFakeStore({
        statusOverrides: FetchStatusEnum.FAILURE,
      })}
    >
      {story()}
    </Provider>
  ),
];
FailedRequest.args = Object.assign({}, Default.args);

export default stories;
