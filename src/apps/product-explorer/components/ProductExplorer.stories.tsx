import { Meta, StoryFn } from '@storybook/react';
import ProductExplorer from './ProductExplorer';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithReduxDecorator from 'src/common/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';

const stories: Meta = {
  title: 'Widgets/Product Explorer/Components',
  component: ProductExplorer,
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Product Explorer',
    }),
  ],
};

const props = {
  linkType: 'product',
};

const Template: StoryFn = () => <ProductExplorer {...props} />;
export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.decorators = [
  storyWithTranslation(),
  storyWithReduxDecorator({
    defaultFakeState: { ...defaultFakeState, loading: true },
    identifier: 'Product Explorer - Loading',
  }),
];

export default stories;
