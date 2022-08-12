import { Meta, StoryFn } from '@storybook/react';
import InteractiveIntegrationWalkthrough from './Widget';
import storyWithTranslation from '../../lib/storyWithTranslation';
import storyWithReduxDecorator from 'src/common/storybook/storyWithReduxDecorator';

const stories: Meta = {
  title: 'Widgets/Interactive Integration Walkthrough/Components',
  component: InteractiveIntegrationWalkthrough,
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      identifier: 'Interactive Integration Walkthrough',
    }),
  ],
};

const Template: StoryFn = () => <InteractiveIntegrationWalkthrough />;
export const Default = Template.bind({});

export default stories;
