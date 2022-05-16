import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductExplorer from './ProductExplorer';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux from '../lib/storyWithRedux';
import ProductsDisplay from './ProductsDisplay';
import storyWithClassNameWrapper from 'src/common/storyWithClassNameWrapper';

const stories: Meta = {
  title: 'Widgets/Product Explorer/Components/Products Display',
  component: ProductsDisplay,
  decorators: [
    storyWithTranslation(),
    storyWithRedux(),
    storyWithClassNameWrapper('product-explorer'),
  ],
};

const props = {
  linkType: 'product',
};

const Template: StoryFn = () => <ProductsDisplay {...props} />;
export const Default = Template.bind({});

export default stories;
