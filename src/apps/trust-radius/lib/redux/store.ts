import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import fetchStatusReducer, {
  TrustRadiusStateFetchStatus,
} from './reducers/fetchStatusReducer';
import windowResizeReducer, {
  TrustRadiusStateWindowResize,
} from './reducers/windowResizeReducer';
import setProductReducer, {
  TrustRadiusStateProducts,
} from './reducers/setProductReducer';
import setThemeReducer, {
  TrustRadiusStateTheme,
} from './reducers/setThemeReducer';

export enum FetchStatusEnum {
  INIT = 'INIT',
  IN_PROGRESS = 'IN_PROGRESS',
  READY = 'READY',
  FAILURE = 'FAILURE',
}

export type TrustRadiusReducersMapper = {
  status: TrustRadiusStateFetchStatus;
  cols: TrustRadiusStateWindowResize;
  prods: TrustRadiusStateProducts;
  palette: TrustRadiusStateTheme;
};

export default createStore(
  combineReducers<TrustRadiusReducersMapper>({
    status: fetchStatusReducer,
    cols: windowResizeReducer,
    prods: setProductReducer,
    palette: setThemeReducer,
  }),
  composeWithDevTools(applyMiddleware<ThunkMiddleware>(thunk)),
);
