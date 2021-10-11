import { Action } from 'redux';
import { FetchStatusEnum } from 'hc-widgets';

export interface TrustRadiusActionFetchStatus
  extends Action<'FETCH_STATUS_ACTION'> {
  status: FetchStatusEnum;
}

const fetchStatusAction = (
  status: FetchStatusEnum,
): TrustRadiusActionFetchStatus => ({
  type: 'FETCH_STATUS_ACTION',
  status,
});

export default fetchStatusAction;
