import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TrustRadiusReview } from '../../../components/TrustRadius';

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.trustradius.com/api/v2/tqw/',
  }),
  endpoints: (builder) => ({
    getReviewsById: builder.query({
      query: (trustRadiusId) => `${trustRadiusId}`,
      transformResponse: (response: any, meta, arg) => {
        return normalizeProductData(response);
      },
    }),
  }),
});

function normalizeProductData(product: any): TrustRadiusReview {
  const productInfo = product?.config?.products[0];

  return {
    ...productInfo,
    date: product?.config?.modified || new Date().toISOString(),
    id: product?.config?._id || '',
    quotes: product?.data || [],
    productName: product?.config?.name,
    totalCount: productInfo?.rating?.count || 1,
    trScore: productInfo?.rating?.trScore || 10,
  };
}

export const { useGetReviewsByIdQuery } = reviewsApi;
