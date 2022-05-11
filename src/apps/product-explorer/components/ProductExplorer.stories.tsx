import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductExplorer from './ProductExplorer';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux, { defaultFakeState } from '../lib/storyWithRedux';
import storyWithReduxDecorator from 'src/common/storyWithReduxDecorator';

const stories: Meta = {
  title: 'Widgets/Product Explorer/Components',
  component: ProductExplorer,
  decorators: [storyWithTranslation(), storyWithRedux()],
};

const props = {
  linkType: 'product',
};

const Template: StoryFn = () => <ProductExplorer {...props} />;
export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.decorators = [
  storyWithTranslation(),
  storyWithReduxDecorator({ ...defaultFakeState, loading: true })(),
];

export default stories;
