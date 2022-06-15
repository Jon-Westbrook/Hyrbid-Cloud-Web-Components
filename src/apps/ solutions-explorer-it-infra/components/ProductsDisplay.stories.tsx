import { Meta, StoryFn } from '@storybook/react';
import ProductsDisplay from './ProductsDisplay';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithClassNameWrapper from 'src/common/storybook/storyWithClassNameWrapper';
import storyWithReduxDecorator from 'src/common/storybook/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';

const stories: Meta = {
  title: 'Widgets/Solutions Explorer IT-Infra/Components/Products Display',
  component: ProductsDisplay,
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Solutions Explorer IT Infra - Products Display',
    }),
    storyWithClassNameWrapper('solutions-explorer-it-infra'),
  ],
};

const Template: StoryFn = () => <ProductsDisplay />;
export const Default = Template.bind({});

export default stories;
