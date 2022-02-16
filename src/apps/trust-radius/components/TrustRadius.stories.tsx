import React from 'react';
import TrustRadius, { TrustRadiusOwnProps } from './TrustRadius';
import { Meta, StoryFn } from '@storybook/react';
import { FetchStatusEnum, TrustRadiusReducersMapper } from '../lib/redux/store';
import { CarbonThemes } from '../../../types/carbon';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';

const storyWithRedux =
  storyWithReduxDecorator<TrustRadiusReducersMapper>(defaultFakeState);
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
Default.decorators = [storyWithRedux()];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
Gray.decorators = [
  storyWithRedux({ palette: { theme: CarbonThemes.GRAY_10 } }),
];

export const Dark = Template.bind({});
Dark.args = Object.assign({}, Default.args);
Dark.decorators = [
  storyWithRedux({ palette: { theme: CarbonThemes.GRAY_100 } }),
];

export const TwoColumns = Template.bind({});
TwoColumns.args = Object.assign({}, Default.args);
TwoColumns.decorators = [storyWithRedux({ cols: { numCols: 2 } })];

export const OneColumn = Template.bind({});
OneColumn.args = Object.assign({}, Default.args);
OneColumn.decorators = [storyWithRedux({ cols: { numCols: 1 } })];

export const Loading = Template.bind({});
Loading.args = Object.assign({}, Default.args);
Loading.decorators = [
  storyWithRedux({ status: { fetchStatus: FetchStatusEnum.IN_PROGRESS } }),
];

export const FailedRequest = Template.bind({});
FailedRequest.decorators = [
  storyWithRedux({ status: { fetchStatus: FetchStatusEnum.FAILURE } }),
];
FailedRequest.args = Object.assign({}, Default.args);

export default stories;
