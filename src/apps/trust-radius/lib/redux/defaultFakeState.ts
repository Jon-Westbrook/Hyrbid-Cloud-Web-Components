import { normalizeProductData } from './reducers/setProductReducer';
import apiResponse from '../../components/api-data-example.json';
import { FetchStatusEnum, TrustRadiusReducersMapper } from './store';
import { CarbonThemes } from '../../../../types/carbon';

const products = {
  'fake-trid': normalizeProductData(apiResponse),
};
const defaultFakeState: TrustRadiusReducersMapper = {
  status: { fetchStatus: FetchStatusEnum.READY },
  cols: { numCols: 4 },
  prods: { products },
  palette: { theme: CarbonThemes.WHITE },
};

export default defaultFakeState;
