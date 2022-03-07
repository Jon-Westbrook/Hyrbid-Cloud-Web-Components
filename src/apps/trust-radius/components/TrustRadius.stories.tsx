import { ReactElement } from 'react';
import TrustRadius, { TrustRadiusProps } from './TrustRadius';
import { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rest } from 'msw';
import { CarbonThemes } from '../../../types/carbon';
import storyWithTranslation from '../lib/storyWithTranslation';
import { Story } from '@storybook/react';
import produce from 'immer';
import mergeDeep from 'lodash.merge';
import { reviewsApi } from '../lib/redux/slices/fetchReviewsSlice';
import { RecursivePartial } from '../../../common/storyWithReduxDecorator';
import apiResponse from './api-data-example.json';

interface StoryWithMockStoreParams<T> {
  defaultFakeState?: T;
  overriddenState?: RecursivePartial<T>;
}

const defaultFakeState = {
  cols: { numCols: 4 },
  theme: CarbonThemes.WHITE,
};

function storyWithMockStore<T>(
  params?: StoryWithMockStoreParams<T>,
): (Story: Story) => ReactElement {
  const newState = produce(defaultFakeState, (draft) => {
    return mergeDeep(draft, params?.overriddenState);
  });

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

  return (Story: Story): ReactElement => (
    <Provider store={mockStore}>
      <Story />
    </Provider>
  );
}

const apiPath = 'https://www.trustradius.com/api/v2/tqw/:trustRadiusId';

const handlers = {
  trApi: rest.get(apiPath, (req, res, ctx) => {
    return res(ctx.json(apiResponse));
  }),
};

const stories: Meta = {
  component: TrustRadius,
  title: 'Trust Radius/Components',
  decorators: [storyWithTranslation()],
  parameters: { msw: { handlers } },
};

const Template: StoryFn<TrustRadiusProps> = (args) => <TrustRadius {...args} />;

export const Default = Template.bind({});
Default.args = {
  useGoogleStars: false,
  trustRadiusId: 'fake-trid',
};
Default.decorators = [storyWithMockStore()];

export const Gray = Template.bind({});
Gray.args = Object.assign({}, Default.args);
Gray.decorators = [
  storyWithMockStore({
    overriddenState: {
      theme: CarbonThemes.GRAY_10,
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = Object.assign({}, Default.args);
Dark.decorators = [
  storyWithMockStore({
    overriddenState: {
      theme: CarbonThemes.GRAY_100,
    },
  }),
];

export const TwoColumns = Template.bind({});
TwoColumns.args = Object.assign({}, Default.args);
TwoColumns.decorators = [
  storyWithMockStore({
    overriddenState: {
      cols: { numCols: 2 },
    },
  }),
];

export const OneColumn = Template.bind({});
OneColumn.args = Object.assign({}, Default.args);
OneColumn.decorators = [
  storyWithMockStore({
    overriddenState: {
      cols: { numCols: 1 },
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = Object.assign({}, Default.args);
Loading.parameters = {
  msw: {
    handlers: {
      trApi: rest.get(apiPath, (req, res, ctx) => {
        return res(ctx.delay('infinite'));
      }),
    },
  },
};
Loading.decorators = [storyWithMockStore()];

export const FailedRequest = Template.bind({});
FailedRequest.args = Object.assign({}, Default.args);
FailedRequest.parameters = {
  msw: {
    handlers: {
      trApi: rest.get(apiPath, (req, res, ctx) => {
        return res(ctx.status(404));
      }),
    },
  },
};
FailedRequest.decorators = [storyWithMockStore()];

export default stories;
