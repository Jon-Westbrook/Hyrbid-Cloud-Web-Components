import { Action } from 'redux';
import { FetchStatusEnum } from 'hc-widgets';

export interface TrustRadiusActionFetchStatus extends Action {
  status: FetchStatusEnum;
}

const fetchStatusAction = (
  status: FetchStatusEnum,
): TrustRadiusActionFetchStatus => ({
  type: 'FETCH_STATUS_ACTION',
  status,
});

export default fetchStatusAction;
