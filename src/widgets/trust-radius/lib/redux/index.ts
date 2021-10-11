import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  TrustRadiusPersonalReview,
  TrustRadiusReview,
} from '../../components/TrustRadius';
import fetchStatusReducer from './reducers/fetchStatusReducer';
import windowResizeReducer from './reducers/windowResizeReducer';

interface TrustRadiusProductState {
  product: TrustRadiusPersonalReview;
  reviews: TrustRadiusReview[];
}

export interface TrustRadiusState {
  products: Record<string, TrustRadiusProductState>;
}

export default createStore(
  combineReducers({ fetchStatusReducer, windowResizeReducer }),
  applyMiddleware(thunk),
);
