import ProductExplorerSecurity from './ProductExplorerSecurity';
import { Meta, StoryFn } from '@storybook/react';

import storyWithTranslation from '../lib/storyWithTranslation';

const stories: Meta = {
  component: ProductExplorerSecurity,
  title: 'Product Explorer Security/Components',
  decorators: [storyWithTranslation()],
};

const Template: StoryFn = (args) => <ProductExplorerSecurity {...args} />;

export const Default = Template.bind({});

export default stories;
