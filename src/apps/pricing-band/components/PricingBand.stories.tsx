import { Meta, StoryFn } from '@storybook/react';
import PricingBand from './PricingBand';
import storyWithTranslation from '../lib/storyWithTranslation';

const stories: Meta = {
  title: 'Widgets/Pricing Band/Components',
  component: PricingBand,
  decorators: [storyWithTranslation()],
};

const Template: StoryFn<void> = () => <PricingBand />;
export const Default = Template.bind({});

export default stories;
