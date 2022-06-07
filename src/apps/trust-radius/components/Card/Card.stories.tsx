import Card, { CardProps } from './Card';
import { Meta, Story } from '@storybook/react';
import { CarbonThemes } from '../../../../types/carbon';
import storyWithTranslation from '../../lib/storyWithTranslation';
import storyWithRedux, { handlers } from '../../lib/storyWithRedux';
import storyWithClassNameWrapper from '../../../../common/storybook/storyWithClassNameWrapper';

const stories: Meta = {
  component: Card,
  title: 'Widgets/Trust Radius/Components/Slider/Card',
  decorators: [storyWithTranslation()],
  parameters: { msw: { handlers } },
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { reviewIndex: 0, trustRadiusId: 'fake-trid' };
Default.decorators = [
  storyWithRedux({ identifier: 'Trust Radius - Card Default' }),
  storyWithClassNameWrapper('trust-radius-widget trust-radius-widget__WHITE'),
];

export const Gray = Template.bind({});
Gray.args = { ...Default.args };
Gray.decorators = [
  storyWithRedux({
    identifier: 'Trust Radius - Card Gray',
    overriddenState: { theme: CarbonThemes.GRAY_10 },
  }),
  storyWithClassNameWrapper('trust-radius-widget trust-radius-widget__GRAY_10'),
];

export const Dark = Template.bind({});
Dark.args = { ...Default.args };
Dark.decorators = [
  storyWithRedux({
    identifier: 'Trust Radius - Card Dark',
    overriddenState: { theme: CarbonThemes.GRAY_100 },
  }),
  storyWithClassNameWrapper(
    'trust-radius-widget trust-radius-widget__GRAY_100',
  ),
];

export default stories;
