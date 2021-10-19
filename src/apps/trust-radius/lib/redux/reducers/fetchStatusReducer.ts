import { Reducer } from 'redux';
import { TrustRadiusActionFetchStatus } from '../actions/fetchStatusAction';
import { FetchStatusEnum } from '../store';

export interface TrustRadiusStateFetchStatus {
  fetchStatus: FetchStatusEnum;
}

const fetchStatusReducer: Reducer<
  TrustRadiusStateFetchStatus,
  TrustRadiusActionFetchStatus
> = (state, action) => {
  switch (action.type) {
    case 'FETCH_STATUS_ACTION':
      return { ...(state || {}), fetchStatus: action.status };
    default:
      return state?.fetchStatus
        ? state
        : { ...(state || {}), fetchStatus: FetchStatusEnum.INIT };
  }
};

export default fetchStatusReducer;
