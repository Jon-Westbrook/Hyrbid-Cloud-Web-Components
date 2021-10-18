import { action as storybookAction } from '@storybook/addon-actions';
import { FetchStatusEnum, TrustRadiusReducersMapper } from './store';
import { CarbonThemes } from '../../../../types/carbon';

import apiResponse from '../../components/api-data-example.json';
import {
  normalizeProductData,
  TrustRadiusStateProduct,
} from './reducers/setProductReducer';
import { applyMiddleware, createStore, Store } from 'redux';

const products = {
  'fake-trid': normalizeProductData(apiResponse),
};

const buildStoreFromState = (
  state: TrustRadiusReducersMapper,
): Store<TrustRadiusReducersMapper> =>
  createStore(
    () => state,
    state,
    applyMiddleware(() => () => (action) => {
      storybookAction(JSON.stringify(action));
      return action;
    }),
  );

export function overrideFakeStore({
  themeOverride,
  productOverrides,
  numColsOverrides,
  statusOverrides,
}: {
  themeOverride?: CarbonThemes;
  productOverrides?: TrustRadiusStateProduct;
  numColsOverrides?: 1 | 2 | 4;
  statusOverrides?: FetchStatusEnum;
}): Store<TrustRadiusReducersMapper> {
  const defaultFakeState: TrustRadiusReducersMapper = {
    status: { fetchStatus: FetchStatusEnum.READY },
    cols: { numCols: 4 },
    prods: { products },
    palette: { theme: CarbonThemes.WHITE },
  };
  const newState = Object.assign({}, defaultFakeState);
  if (themeOverride) {
    newState.palette.theme = themeOverride;
  }
  if (productOverrides) {
    newState.prods.products[productOverrides.product.id] = productOverrides;
  }
  if (numColsOverrides) {
    newState.cols.numCols = numColsOverrides;
  }
  if (statusOverrides) {
    newState.status.fetchStatus = statusOverrides;
  }
  return buildStoreFromState(newState);
}

export default function fakeStore(): Store<TrustRadiusReducersMapper> {
  const defaultFakeState: TrustRadiusReducersMapper = {
    status: { fetchStatus: FetchStatusEnum.READY },
    cols: { numCols: 4 },
    prods: { products },
    palette: { theme: CarbonThemes.WHITE },
  };
  return buildStoreFromState(Object.assign({}, defaultFakeState));
}
