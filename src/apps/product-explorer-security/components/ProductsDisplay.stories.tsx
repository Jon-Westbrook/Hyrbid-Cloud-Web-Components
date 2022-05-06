import ProductsDisplay from './ProductsDisplay';
import { Meta, StoryFn } from '@storybook/react';

import storyWithTranslation from '../lib/storyWithTranslation';
import defaultFakeState from '../lib/redux/defaultFakeState';
import storyWithReduxDecorator from 'src/common/storyWithReduxDecorator';

const stories: Meta = {
  component: ProductsDisplay,
  title: 'Widgets/Product Explorer Security/Components/Products Display',
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Product Explorer Security - Product Display',
    }),
  ],
};

const Template: StoryFn = (args) => <ProductsDisplay {...args} />;

export const Default = Template.bind({});

export default stories;
