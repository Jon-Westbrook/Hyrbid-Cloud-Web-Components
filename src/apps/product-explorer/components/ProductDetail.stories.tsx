import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductDetail from './ProductDetail';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux from '../lib/storyWithRedux';

const stories: Meta = {
  title: 'Widgets/Product Explorer/Components',
  component: ProductDetail,
  decorators: [storyWithTranslation(), storyWithRedux()],
};

const product = {
  longDescription: 'Virtual agents customizable to any domain',
  name: 'IBM Watson Assistant',
  translationId: 'watsonAssistant',
  url: '/products/watson-assistant',
  pricingUrl: '/products/watson-assistant/pricing',
  external: false,
  productKey: 'key',
};

const props = {
  category: {
    name: 'AI / machine learning',
    translationId: 'ai',
    description: 'Use Watson’s AI or build your own machine learning models',
    icon: 'platform',
    link: '/cloud/ai',
    products: [product],
  },
  products: [product],
  index: 0,
  selected: true,
  linkType: 'product',
  element: 'product-explorer',
};

const Template: StoryFn = () => <ProductDetail {...props} />;
export const Default = Template.bind({});

export default stories;
