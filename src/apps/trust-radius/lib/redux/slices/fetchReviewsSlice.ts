import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  TrustRadiusMetadata,
  TrustRadiusReview,
} from '../../../components/TrustRadius';

interface ProductInfo {
  _id: string;
  name: string;
  rating: { count: number; trScore: number };
  slug: string;
}

function normalizeProductData(product: {
  config: {
    products: ProductInfo[];
  };
  data: [];
}): { metadata: TrustRadiusMetadata; reviews: TrustRadiusReview[] } {
  const productInfo: ProductInfo = product?.config?.products[0];

  return {
    metadata: {
      id: productInfo?._id || '',
      productName: productInfo?.name || '',
      slug: productInfo?.slug || '',
      totalCount: productInfo?.rating?.count || 1,
      trScore: productInfo?.rating?.trScore || 10,
    },
    reviews: product?.data.map((item: any) => {
      return {
        company: {
          name: item.company.name,
          size: item.company.size,
          industry: item.company.industry.name,
        },
        date: item.quotes[0].review.modified,
        heading: item.quotes[0].review.heading,
        name: `${item.name.first} ${item.name.last}`,
        title: item.position.title,
        quotes: item.quotes.map((quote: { text: string }) => quote.text),
        rating: item.quotes[0].rating,
        slug: item.quotes[0].review.slug,
      };
    }),
  };
}

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

export const { useGetReviewsByIdQuery } = reviewsApi;