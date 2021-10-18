import {
  TrustRadiusPersonalReview,
  TrustRadiusReview,
} from '../../../components/TrustRadius';
import { Reducer } from 'redux';
import { TrustRadiusActionSetProduct } from '../actions/setProductAction';

export interface TrustRadiusStateProduct {
  product: TrustRadiusPersonalReview;
  reviews: TrustRadiusReview[];
}

export type TrustRadiusStateProducts = {
  products: Record<string, TrustRadiusStateProduct>;
};
type ProductsState = TrustRadiusStateProducts[keyof TrustRadiusStateProducts];

export function normalizeProductData(product: any): TrustRadiusStateProduct {
  const productInfo = product?.config?.products[0];
  return {
    product: {
      ...productInfo,
      modified: product?.config?.modified || new Date().toISOString(),
      count: productInfo.rating?.count || 1,
      score: productInfo.rating?.trScore || 10,
      id: product?.config?._id || '',
    },
    reviews: product?.data || [],
  };
}

function _mutateProduct(products: ProductsState, product: any): ProductsState {
  // Parses the API response format and keeps the information we care about.
  const productInfo = product?.config?.products[0];
  if (!productInfo) {
    return products;
  }
  return {
    ...products,
    [product.config._id]: normalizeProductData(product),
  };
}

const setProductReducer: Reducer<
  TrustRadiusStateProducts,
  TrustRadiusActionSetProduct
> = (state, action) => ({
  ...(state || {}),
  products: _mutateProduct(state?.products || {}, action.product),
});

export default setProductReducer;
