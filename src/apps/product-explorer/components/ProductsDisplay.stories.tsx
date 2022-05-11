import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductExplorer from './ProductExplorer';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux from '../lib/storyWithRedux';

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

export default stories;
