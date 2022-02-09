import ProductsDisplay from './ProductsDisplay';
import { Meta, StoryFn } from '@storybook/react';

import storyWithTranslation from '../lib/storyWithTranslation';

const stories: Meta = {
  component: ProductsDisplay,
  title: 'Product Explorer Security/Components/Products Display',
  decorators: [storyWithTranslation()],
};

const Template: StoryFn = (args) => <ProductsDisplay {...args} />;

export const Default = Template.bind({});

export default stories;
