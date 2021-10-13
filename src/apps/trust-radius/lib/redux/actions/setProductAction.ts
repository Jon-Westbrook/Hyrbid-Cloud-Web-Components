import { Action } from 'redux';

export interface TrustRadiusActionSetProduct extends Action<'SET_PRODUCT'> {
  product: TrustRadiusActionSetProduct;
}

const setProductAction = (product: any): TrustRadiusActionSetProduct => ({
  type: 'SET_PRODUCT',
  product,
});

export default setProductAction;
