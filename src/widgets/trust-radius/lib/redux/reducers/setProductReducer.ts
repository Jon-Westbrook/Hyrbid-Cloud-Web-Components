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

type ProductsState = Record<string, TrustRadiusStateProduct>;
export type TrustRadiusStateProducts = {
  products: ProductsState;
};

function _mutateProduct(products: ProductsState, product: any): ProductsState {
  // Parses the API response format and keeps the information we care about.
  const productInfo = product?.config?.products[0];
  if (!productInfo) {
    return products;
  }
  return {
    ...products,
    [productInfo.slug]: {
      product: productInfo,
      reviews: product?.data?.reviews || [],
    },
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
