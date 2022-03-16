import ProductsDisplay from './ProductsDisplay';
import { Meta, StoryFn } from '@storybook/react';

import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithRedux from '../lib/storyWithRedux';
import storyWithClassNameWrapper from '../../../common/storyWithClassNameWrapper';

const stories: Meta = {
  component: ProductsDisplay,
  title: 'Widgets/Product Explorer It-Infra/Components/Products Display',
  decorators: [storyWithTranslation(), storyWithRedux(), storyWithClassNameWrapper('product-explorer-it-infra')],
};

const Template: StoryFn = (args) => <ProductsDisplay {...args} />;

export const Default = Template.bind({});

export default stories;
