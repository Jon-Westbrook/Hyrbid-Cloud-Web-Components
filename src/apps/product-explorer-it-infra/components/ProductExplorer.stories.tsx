import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductExplorer from './ProductExplorer';

import '../index.scss';

const stories: Meta = {
  title: 'Journey to AI/Components',
  component: ProductExplorer,
};

const elem = document.createElement('div');
elem.setAttribute('id', 'demo');
document.body.appendChild(elem);

const Template: StoryFn<void> = () => <ProductExplorer element={elem} />;

export const Default = Template.bind({});

export default stories;
