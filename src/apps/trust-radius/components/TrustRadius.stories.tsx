import { ReactElement } from 'react';
import TrustRadius, { TrustRadiusProps } from './TrustRadius';
import { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import overrideStore from '../lib/redux/overrideStore';
import { worker } from '../lib/mocks/browser';
import { rest } from 'msw';
import { CarbonThemes } from '../../../types/carbon';
import storyWithTranslation from '../lib/storyWithTranslation';
import storyWithReduxDecorator from '../../../common/storyWithReduxDecorator';
import defaultFakeState from '../lib/redux/defaultFakeState';
import { Story } from '@storybook/react';
import produce from 'immer';
import mergeDeep from 'lodash.merge';
import { reviewsApi } from '../lib/redux/slices/fetchReviewsSlice';
import { RecursivePartial } from '../../../common/storyWithReduxDecorator';

function storyWithMockStore<T>(
  defaultFakeState: T,
  overriddenState: RecursivePartial<T> = {},
) {
  // take any state input and merge in overrides
  const newState = produce(defaultFakeState, (draft) => {
    return mergeDeep(draft, overriddenState);
  });
  console.log(defaultFakeState, newState);
  // create store with
  const mockStore = configureStore({
    reducer: {
      [reviewsApi.reducerPath]: reviewsApi.reducer,
      cols: () => newState.cols,
      theme: () => newState.theme,
    },
    devTools: { name: 'Trust Radius' },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(reviewsApi.middleware),
  });

  // return story wrapped in provider
  return (Story: Story): ReactElement => (
    <Provider store={mockStore}>
      <Story />
    </Provider>
  );
}

const storyWithRedux = storyWithMockStore(defaultFakeState);
const stories: Meta = {
  component: TrustRadius,
  title: 'Trust Radius/Components',
  decorators: [storyWithTranslation()],
};

const Template: StoryFn<TrustRadiusProps> = (args) => <TrustRadius {...args} />;

export const Default = Template.bind({});
Default.args = {
  useGoogleStars: false,
  trustRadiusId: 'fake-trid',
};
Default.decorators = [storyWithRedux];

// export const Gray = Template.bind({});
// Gray.args = Object.assign({}, Default.args);
// Gray.decorators = [
//   storyWithRedux({ palette: { theme: CarbonThemes.GRAY_10 } }),
// ];

// export const Dark = Template.bind({});
// Dark.args = Object.assign({}, Default.args);
// Dark.decorators = [
//   storyWithRedux({ palette: { theme: CarbonThemes.GRAY_100 } }),
// ];

// export const TwoColumns = Template.bind({});
// TwoColumns.args = Object.assign({}, Default.args);
// TwoColumns.decorators = [storyWithRedux({ cols: { numCols: 2 } })];

// export const OneColumn = Template.bind({});
// OneColumn.args = Object.assign({}, Default.args);
// OneColumn.decorators = [storyWithRedux({ cols: { numCols: 1 } })];

// export const Loading = Template.bind({});
// Loading.args = Object.assign({}, Default.args);
// Loading.decorators = [
//   (story) => {
//     worker.use(
//       rest.get(
//         'https://www.trustradius.com/api/v2/tqw/:trustRadiusId',
//         (req, res, ctx) => {
//           return res(ctx.delay('infinite'));
//         },
//       ),
//     );
//     return storyWithRedux();
//   },
// ];

// export const FailedRequest = Template.bind({});
// FailedRequest.args = Object.assign({}, Default.args);
// FailedRequest.decorators = [
//   (story) => {
//     worker.use(
//       rest.get(
//         'https://www.trustradius.com/api/v2/tqw/:trustRadiusId',
//         (req, res, ctx) => {
//           return res.once(ctx.status(404));
//         },
//       ),
//     );
//     return storyWithRedux();
//   },
// ];

export default stories;
