import ProductsDisplay from './ProductsDisplay';
import { Meta, StoryFn } from '@storybook/react';

import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux from '../lib/storyWithRedux';

const stories: Meta = {
  component: ProductsDisplay,
  title: 'Product Explorer Security/Components/Products Display',
  decorators: [storyWithTranslation(), storyWithRedux()],
};

const Template: StoryFn = (args) => <ProductsDisplay {...args} />;

export const Default = Template.bind({});

export default stories;
