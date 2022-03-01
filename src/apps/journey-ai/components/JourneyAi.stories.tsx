import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import JourneyAi from './JourneyAi';

import '../index.scss';
import { Provider } from 'react-redux';
import { store } from '../lib/redux/store';
import storyWithTranslation from '../lib/storyWithTranslation';

const stories: Meta = {
  title: 'Widgets/Journey to AI/Components',
  component: JourneyAi,
  decorators: [storyWithTranslation()],
};

const Template: StoryFn<void> = () => <JourneyAi />;

export const Default = Template.bind({});
Default.decorators = [(story) => <Provider store={store}>{story()}</Provider>];

export default stories;
