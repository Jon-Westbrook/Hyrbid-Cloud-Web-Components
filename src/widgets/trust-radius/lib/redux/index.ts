import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  TrustRadiusPersonalReview,
  TrustRadiusReview,
} from '../../components/TrustRadius';
import fetchStatusReducer from './reducers/fetchStatusReducer';

interface TrustRadiusProductState {
  product: TrustRadiusPersonalReview;
  reviews: TrustRadiusReview[];
}

export interface TrustRadiusState {
  windowSize: { width: number; height: number };
  products: Record<string, TrustRadiusProductState>;
}

export default createStore(
  combineReducers({ fetchStatusReducer }),
  applyMiddleware(thunk),
);
