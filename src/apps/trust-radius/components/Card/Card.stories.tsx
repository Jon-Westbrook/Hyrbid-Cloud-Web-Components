import Card, { CardProps } from './Card';
import { Meta, Story } from '@storybook/react';
import { CarbonThemes } from '../../../../types/carbon';
import storyWithTranslation from '../../lib/storyWithTranslation';
import { storyWithMockStore, handlers } from '../TrustRadius.stories';

const stories: Meta = {
  component: Card,
  title: 'Widgets/Trust Radius/Components/Slider/Card',
  decorators: [storyWithTranslation()],
  parameters: { msw: { handlers } },
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { reviewIndex: 0, trustRadiusId: 'fake-trid' };
Default.decorators = [storyWithMockStore()];

export const Gray = Template.bind({});
Gray.args = { ...Default.args };
Gray.decorators = [
  storyWithMockStore({ overriddenState: { theme: CarbonThemes.GRAY_10 } }),
];

export const Dark = Template.bind({});
Dark.args = { ...Default.args };
Dark.decorators = [
  storyWithMockStore({ overriddenState: { theme: CarbonThemes.GRAY_100 } }),
];

export default stories;
