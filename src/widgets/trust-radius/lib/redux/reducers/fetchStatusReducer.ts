import { combineReducers, Reducer } from 'redux';
import { TrustRadiusActionFetchStatus } from '../actions/fetchStatusAction';
import { FetchStatusEnum } from 'hc-widgets';

export interface TrustRadiusStateFetchStatus {
  fetchStatus: FetchStatusEnum;
}

const fetchStatusReducer: Reducer<
  TrustRadiusStateFetchStatus,
  TrustRadiusActionFetchStatus
> = (state, action) => ({
  ...(state || {}),
  fetchStatus: action.status,
});

export default fetchStatusReducer;
