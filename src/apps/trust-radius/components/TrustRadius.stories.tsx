import React, { ReactNode } from 'react';
import TrustRadius, { TrustRadiusOwnProps } from './TrustRadius';
import { Story } from '@storybook/react';
import { Provider } from 'react-redux';
import { FetchStatusEnum } from '../lib/redux/store';
import fakeStore, { overrideFakeStore } from '../lib/redux/fakeStore';

import { CarbonThemes } from '../../../types/carbon';
import { ArgsStoryFn } from '@storybook/addons';
import storyWithTranslation from '../lib/storyWithTranslation';

const stories = {
  component: TrustRadius,
  title: 'Trust Radius',
  decorators: [storyWithTranslation()],
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
  (story: ArgsStoryFn<ReactNode>) => (
    <Provider store={fakeStore()}>{story()}</Provider>
  ),
];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
Gray.decorators = [
  (story: ArgsStoryFn<ReactNode>) => (
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
  (story: ArgsStoryFn<ReactNode>) => (
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
  (story: ArgsStoryFn<ReactNode>) => (
    <Provider store={overrideFakeStore({ numColsOverrides: 2 })}>
      {story()}
    </Provider>
  ),
];

export const OneColumn = Template.bind({});
OneColumn.args = Object.assign({}, Default.args);
OneColumn.decorators = [
  (story: ArgsStoryFn<ReactNode>) => (
    <Provider store={overrideFakeStore({ numColsOverrides: 1 })}>
      {story()}
    </Provider>
  ),
];

export const Loading = Template.bind({});
Loading.args = Object.assign({}, Default.args);
Loading.decorators = [
  (story: ArgsStoryFn<ReactNode>) => (
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
  (story: ArgsStoryFn<ReactNode>) => (
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
