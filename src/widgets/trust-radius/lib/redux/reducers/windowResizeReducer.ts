import { Reducer } from 'redux';
import { TrustRadiusActionWindowResize } from '../actions/windowResizeAction';

type NumCols = 1 | 2 | 4;

export interface TrustRadiusStateWindowResize {
  numCols: NumCols;
}

const _doCalcCols = (width: number): NumCols => {
  return width >= 1312 ? 4 : width >= 672 ? 2 : 1;
};

const windowResizeReducer: Reducer<
  TrustRadiusStateWindowResize,
  TrustRadiusActionWindowResize
> = (state, action) => ({
  ...state,
  numCols: _doCalcCols(action.width),
});

export default windowResizeReducer;
