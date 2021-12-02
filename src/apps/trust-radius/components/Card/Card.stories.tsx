import React from 'react';

import Card, { CardProps } from './Card';
import { Meta, Story } from '@storybook/react';
import { CarbonThemes } from '../../../../types/carbon';
import { Provider } from 'react-redux';
import fakeStore, { overrideFakeStore } from '../../lib/redux/fakeStore';
import storyWithTranslation from '../../lib/storyWithTranslation';

const stories: Meta = {
  component: Card,
  title: 'Trust Radius/Components/Slider/Card',
  decorators: [storyWithTranslation()],
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { reviewIndex: 0, trustRadiusId: 'fake-trid' };
Default.decorators = [
  (story) => <Provider store={fakeStore()}>{story()}</Provider>,
];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
Gray.decorators = [
  (story) => (
    <Provider
      store={overrideFakeStore({ themeOverride: CarbonThemes.GRAY_10 })}
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
      store={overrideFakeStore({ themeOverride: CarbonThemes.GRAY_100 })}
    >
      {story()}
    </Provider>
  ),
];

export default stories;
