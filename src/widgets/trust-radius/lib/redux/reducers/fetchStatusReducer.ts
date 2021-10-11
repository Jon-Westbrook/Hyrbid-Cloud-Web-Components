import { combineReducers, Reducer } from 'redux';
import { TrustRadiusFetchStatusAction } from '../actions/fetchStatusAction';
import { FetchStatusEnum } from 'hc-widgets';

export interface TrustRadiusStateFetchStatus {
  fetchStatus: FetchStatusEnum;
}

const fetchStatusReducer: Reducer<
  TrustRadiusStateFetchStatus,
  TrustRadiusFetchStatusAction
> = (state, action) => {
  return {
    ...(state || {}),
    fetchStatus: action.status,
  };
};

export default combineReducers({ fetchStatusReducer });
