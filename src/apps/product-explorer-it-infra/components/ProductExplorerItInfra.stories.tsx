import { Meta, StoryFn } from '@storybook/react';
import ProductExplorerItInfra from './ProductExplorerItInfra';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';

const stories: Meta = {
  title: 'Widgets/Product Explorer IT-Infra/Components',
  component: ProductExplorerItInfra,
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Product Explorer IT Infra',
    }),
  ],
};

const Template: StoryFn<void> = () => <ProductExplorerItInfra />;
export const Default = Template.bind({});

export default stories;
