import setProductAction from './setProductAction';
import fetchStatusAction from './fetchStatusAction';
import { FetchStatusEnum } from 'hc-widgets';
import { ThunkAction } from 'redux-thunk';

const fetchProductDataAction = (
  trustRadiusId: string,
): ThunkAction<any, any, any, any> => async (dispatch) => {
  if (!window.fetch) {
    console.error('Unable to use Fetch API in non-browser environments.');
    dispatch(fetchStatusAction(FetchStatusEnum.FAILURE));
    return;
  }
  try {
    dispatch(FetchStatusEnum.IN_PROGRESS);
    const response = await window.fetch(
      `https://www.trustradius.com/api/v2/tqw/${trustRadiusId}`,
    );
    dispatch(fetchStatusAction(FetchStatusEnum.READY));
    dispatch(setProductAction(await response.json()));
  } catch (e) {
    console.error(e);
    dispatch(fetchStatusAction(FetchStatusEnum.FAILURE));
  }
};

export default fetchProductDataAction;
