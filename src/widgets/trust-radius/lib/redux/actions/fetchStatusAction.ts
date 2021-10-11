import { Action } from 'redux';
import { FetchStatusEnum } from 'hc-widgets';

export interface TrustRadiusFetchStatusAction extends Action {
  status: FetchStatusEnum;
}

const fetchStatusAction = (
  status: FetchStatusEnum,
): TrustRadiusFetchStatusAction => ({
  type: 'FETCH_STATUS_ACTION',
  status,
});

export default fetchStatusAction;
