import { ReactElement } from 'react';
import { Story } from '@storybook/react';
import { ConfigureStoreOptions } from '@reduxjs/toolkit';
import { rest } from 'msw';
import { reviewsApi } from '../lib/redux/slices/fetchReviewsSlice';
import setThemeSlice from '../lib/redux/slices/setThemeSlice';
import apiResponse from '../components/api-data-example.json';
import storyWithReduxDecorator, {
  StoryWithMockStoreParams,
} from '../../../common/storybook/storyWithReduxDecorator';

export const apiPath = 'https://www.trustradius.com/api/v2/tqw/:trustRadiusId';

const storeConfig: ConfigureStoreOptions = {
  reducer: {
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    theme: setThemeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewsApi.middleware),
};

export const handlers = {
  trApi: rest.get(apiPath, (req, res, ctx) => {
    switch (req.params.trustRadiusId) {
      case 'fake-trid':
        return res(ctx.json(apiResponse));
      case 'loading':
        return res(ctx.delay('infinite'));
      case '404':
      default:
        return res(ctx.status(404));
    }
  }),
};

/**
 * helper function that includes store config in every generated decorator
 */
export default function storyWithRedux<T>(
  params: StoryWithMockStoreParams<T>,
): (Story: Story) => ReactElement {
  return storyWithReduxDecorator(params, storeConfig);
}
