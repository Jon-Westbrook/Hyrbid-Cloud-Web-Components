import React from 'react';

import Card, { CardProps } from './Card';
import { Meta, Story } from '@storybook/react';
import { CarbonThemes } from '../../../../types/carbon';
import storyWithTranslation from '../../lib/storyWithTranslation';
import { TrustRadiusReducersMapper } from '../../lib/redux/store';
import defaultFakeState from '../../lib/redux/defaultFakeState';
import storyWithReduxDecorator from '../../../../common/storyWithReduxDecorator';

const storyWithRedux =
  storyWithReduxDecorator<TrustRadiusReducersMapper>(defaultFakeState);
const stories: Meta = {
  component: Card,
  title: 'Trust Radius/Components/Slider/Card',
  decorators: [storyWithTranslation()],
};

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = { reviewIndex: 0, trustRadiusId: 'fake-trid' };
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

export default stories;
