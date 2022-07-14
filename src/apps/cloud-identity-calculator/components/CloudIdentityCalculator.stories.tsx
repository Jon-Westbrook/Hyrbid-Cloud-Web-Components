import { Meta, StoryFn } from '@storybook/react';
import CloudIdentityCalculator from './CloudIdentityCalculator';
import storyWithTranslation from '../lib/storyWithTranslation';

const stories: Meta = {
  title: 'Widgets/Cloud Identity Calculator/Components',
  component: CloudIdentityCalculator,
  decorators: [storyWithTranslation()],
};

const Template: StoryFn<void> = () => <CloudIdentityCalculator />;
export const Default = Template.bind({});

export default stories;
