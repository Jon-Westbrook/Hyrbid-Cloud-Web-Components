import ProductExplorerSecurity from './ProductExplorerSecurity';
import { Meta, StoryFn } from '@storybook/react';

import storyWithTranslation from '../lib/storyWithTranslation';
import defaultFakeState from '../lib/redux/defaultFakeState';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';

const stories: Meta = {
  component: ProductExplorerSecurity,
  title: 'Widgets/Product Explorer Security/Components',
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Product Explorer Security',
    }),
  ],
};

const Template: StoryFn = (args) => <ProductExplorerSecurity {...args} />;

export const Default = Template.bind({});

export default stories;
