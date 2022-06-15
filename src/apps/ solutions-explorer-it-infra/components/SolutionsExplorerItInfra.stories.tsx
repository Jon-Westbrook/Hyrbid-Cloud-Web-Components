import { Meta, StoryFn } from '@storybook/react';
import SolutionsExplorerItInfra from './SolutionsExplorerItInfra';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithReduxDecorator from '../../../common/storybook/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';

const stories: Meta = {
  title: 'Widgets/Solutions Explorer IT-Infra/Components',
  component: SolutionsExplorerItInfra,
  decorators: [
    storyWithTranslation(),
    storyWithReduxDecorator({
      defaultFakeState,
      identifier: 'Solutions Explorer IT Infra',
    }),
  ],
};

const Template: StoryFn = () => <SolutionsExplorerItInfra />;
export const Default = Template.bind({});

export default stories;
