import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  TrustRadiusMetadata,
  TrustRadiusReview,
} from '../../../components/TrustRadius';
import { shuffle, uniq } from 'lodash';

interface ProductInfo {
  _id: string;
  name: string;
  rating: { count: number; trScore: number };
  slug: string;
}

type ProductData = {
  config: {
    products: ProductInfo[];
  };
  data: {
    company: { name: string; size: string; industry: { name: string } };
    quotes: {
      review: { modified: string; heading: string; slug: string };
      text: string;
      rating: number;
    }[];
    name: { first: string; last: string };
    position: { title: string };
  }[];
};

function normalizeProductData(product: ProductData): {
  metadata: TrustRadiusMetadata;
  reviews: TrustRadiusReview[];
} {
  const productInfo: ProductInfo = product?.config?.products[0];

  return {
    metadata: {
      id: productInfo?._id || '',
      productName: productInfo?.name || '',
      slug: productInfo?.slug || '',
      totalCount: productInfo?.rating?.count || 1,
      trScore: productInfo?.rating?.trScore || 10,
    },
    reviews: product?.data.map((item) => {
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
        quotes: item.quotes.map((quote) => quote.text),
        rating: item.quotes[0].rating,
        slug: item.quotes[0].review.slug,
        productName: productInfo?.name || '', // Used when rendering as multi-product widget.
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
    getReviewsByIds: builder.query({
      async queryFn(
        trustRadiusIds: Array<string>,
        _queryApi,
        _extraOptions,
        fetchWithBaseQuery,
      ) {
        const apiPromises = trustRadiusIds.map(async (id) => {
          const { data, error } = await fetchWithBaseQuery(id);
          if (error) throw error;
          return data as ProductData;
        });

        const { data, error } = await Promise.all(apiPromises)
          .then((result) => {
            const normalizedProductData = result.map(normalizeProductData);
            const combinedProductData = normalizedProductData.reduce(
              (previous, current) => {
                return [...previous, ...current.reviews];
              },
              normalizedProductData[0].reviews,
            );
            return {
              data: {
                // We only make use of metadata when rendering a single-product widget.
                metadata: normalizedProductData[0].metadata,
                reviews: uniq(shuffle(combinedProductData)),
                singleProduct: normalizedProductData.length === 1,
              },
              error: undefined,
            };
          })
          .catch((error) => {
            return {
              data: undefined,
              error,
            };
          });

        return data ? { data } : { error };
      },
    }),
  }),
});

export const { useGetReviewsByIdsQuery } = reviewsApi;
