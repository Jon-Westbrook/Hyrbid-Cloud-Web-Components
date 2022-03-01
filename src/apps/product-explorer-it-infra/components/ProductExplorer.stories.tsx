import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductExplorer from './ProductExplorer';

import storyWithTranslation from '../lib/storyWithTranslation';
import { IBMLocale } from 'src/common/mapValidLocale';

const stories: Meta = {
  title: 'Journey to AI/Components',
  component: ProductExplorer,
  decorators: [storyWithTranslation()],
};

const Template: StoryFn<void> = () => (
  <ProductExplorer localeCode={IBMLocale.EN} />
);

export const Default = Template.bind({});

export default stories;
