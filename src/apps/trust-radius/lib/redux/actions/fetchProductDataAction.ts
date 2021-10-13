import setProductAction from './setProductAction';
import fetchStatusAction from './fetchStatusAction';
import { ThunkAction } from 'redux-thunk';
import { FetchStatusEnum } from '../store';

const fetchProductDataAction = (
  trustRadiusId: string,
): ThunkAction<any, any, any, any> => async (dispatch, getState) => {
  const { products } = getState();
  if (products && typeof products[trustRadiusId] !== 'undefined') {
    dispatch(setProductAction(products[trustRadiusId]));
    return;
  }
  if (!window.fetch) {
    console.error('Unable to use Fetch API in non-browser environments.');
    dispatch(fetchStatusAction(FetchStatusEnum.FAILURE));
    return;
  }
  try {
    dispatch(fetchStatusAction(FetchStatusEnum.IN_PROGRESS));
    const response = await window.fetch(
      `https://www.trustradius.com/api/v2/tqw/${trustRadiusId}`,
    );
    dispatch(setProductAction(await response.json()));
    dispatch(fetchStatusAction(FetchStatusEnum.READY));
  } catch (e) {
    console.error(e);
    dispatch(fetchStatusAction(FetchStatusEnum.FAILURE));
  }
};

export default fetchProductDataAction;
