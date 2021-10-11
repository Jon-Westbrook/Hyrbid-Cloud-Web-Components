import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import fetchStatusReducer, {
  TrustRadiusStateFetchStatus,
} from './reducers/fetchStatusReducer';
import windowResizeReducer, {
  TrustRadiusStateWindowResize,
} from './reducers/windowResizeReducer';
import setProductReducer, {
  TrustRadiusStateProducts,
} from './reducers/setProductReducer';
import { FetchStatusEnum } from 'hc-widgets';

export type TrustRadiusRootState = TrustRadiusStateWindowResize &
  TrustRadiusStateFetchStatus &
  TrustRadiusStateProducts;

type ReducersMapper = {
  status: TrustRadiusStateFetchStatus;
  cols: TrustRadiusStateWindowResize;
  prods: TrustRadiusStateProducts;
};
export default createStore(
  combineReducers<ReducersMapper>({
    status: fetchStatusReducer,
    cols: windowResizeReducer,
    prods: setProductReducer,
  }),
  {
    status: { fetchStatus: FetchStatusEnum.INIT },
    cols: { numCols: 1 },
    prods: { products: {} },
  },
  applyMiddleware(thunk),
);
