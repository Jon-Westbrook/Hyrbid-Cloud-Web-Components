import setProductAction from './setProductAction';
import { ThunkAction } from 'redux-thunk';
import fetchJsonUrlWithStatus from './util/fetchJsonUrlWithStatus';

const fetchProductDataAction = (
  trustRadiusId: string,
): ThunkAction<any, any, any, any> => async (dispatch, getState) => {
  const { products } = getState();
  if (products && typeof products[trustRadiusId] !== 'undefined') {
    dispatch(setProductAction(products[trustRadiusId]));
    return;
  }
  await fetchJsonUrlWithStatus(
    `https://www.trustradius.com/api/v2/tqw/${trustRadiusId}`,
    (res) => dispatch(setProductAction(res)),
    dispatch,
  );
};

export default fetchProductDataAction;
