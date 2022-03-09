import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductExplorerItInfra from './ProductExplorerItInfra';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux from '../lib/storyWithRedux';

const stories: Meta = {
  title: 'Product Explorer IT-Infra/Components',
  component: ProductExplorerItInfra,
  decorators: [storyWithTranslation(), storyWithRedux()],
};

const Template: StoryFn<void> = () => <ProductExplorerItInfra />;
export const Default = Template.bind({});

export default stories;
