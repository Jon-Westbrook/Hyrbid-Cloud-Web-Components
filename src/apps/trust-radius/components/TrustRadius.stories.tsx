import TrustRadius, { TrustRadiusProps } from './TrustRadius';
import { Meta, StoryFn } from '@storybook/react';
import { CarbonThemes } from '../../../types/carbon';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux from '../lib/storyWithRedux';
import { handlers } from '../lib/storyWithRedux';

const stories: Meta = {
  component: TrustRadius,
  title: 'Widgets/Trust Radius/Components',
  decorators: [storyWithTranslation()],
  parameters: {
    msw: { handlers },
  },
};

const Template: StoryFn<TrustRadiusProps> = (args) => <TrustRadius {...args} />;

export const Default = Template.bind({});
Default.args = {
  useGoogleStars: false,
  trustRadiusId: 'fake-trid',
};
Default.decorators = [
  storyWithRedux({
    identifier: 'Trust Radius - Default',
  }),
];

export const Gray = Template.bind({});
Gray.args = { ...Default.args };
Gray.decorators = [
  storyWithRedux({
    identifier: 'Trust Radius - Gray',
    overriddenState: {
      theme: CarbonThemes.GRAY_10,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = { ...Default.args };
Dark.decorators = [
  storyWithRedux({
    identifier: 'Trust Radius - Dark',
    overriddenState: {
      theme: CarbonThemes.GRAY_100,
    },
  }),
];

export const TwoColumns = Template.bind({});
TwoColumns.args = { ...Default.args };
TwoColumns.decorators = [
  storyWithRedux({
    identifier: 'Trust Radius - Two Columns',
  }),
];
TwoColumns.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
};

export const OneColumn = Template.bind({});
OneColumn.args = { ...Default.args };
OneColumn.decorators = [
  storyWithRedux({
    identifier: 'Trust Radius - One Column',
  }),
];
OneColumn.parameters = {
  layout: 'fullscreen', // https://storybook.js.org/docs/react/configure/story-layout
  viewport: {
    defaultViewport: 'mobile1',
  },
};

export const Loading = Template.bind({});
Loading.args = { ...Default.args, trustRadiusId: 'loading' };
Loading.decorators = [storyWithRedux({ identifier: 'Trust Radius - Loading' })];

export const FailedRequest = Template.bind({});
FailedRequest.args = { ...Default.args, trustRadiusId: '404' };
FailedRequest.decorators = [
  storyWithRedux({ identifier: 'Trust Radius - Failed Request' }),
];

export default stories;
