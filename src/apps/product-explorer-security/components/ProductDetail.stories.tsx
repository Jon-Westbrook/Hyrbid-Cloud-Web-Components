import ProductDetail from './ProductDetail';
import { Meta, StoryFn } from '@storybook/react';

import storyWithTranslation from '../lib/storyWithTranslation';

const stories: Meta = {
  component: ProductDetail,
  title: 'Product Explorer Security/Components/Product Detail',
  decorators: [storyWithTranslation()],
};

const product = {
  longDescription:
    'Gain insights into threats and risks and respond faster with automation across hybrid, multicloud environments',
  name: 'IBM Cloud Pak for Security',
  translationId: 'cloudPak',
  url: '/products/cloud-pak-for-security',
};

const props = {
  category: {
    name: 'Platforms',
    translationId: 'platforms',
    description:
      'Power your organization’s digital transformation by modernizing your security program',
    icon: 'platform',
    products: [product],
    link: '/products/cloud-pak-for-security',
  },
  products: [product],
  index: 0,
  selected: true,
};

const Template: StoryFn = () => <ProductDetail {...props} />;

export const Default = Template.bind({});

export default stories;
