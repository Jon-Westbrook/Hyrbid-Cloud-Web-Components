import { Reducer } from 'redux';
import { TrustRadiusActionSetTheme } from '../actions/setThemeAction';
import { CarbonThemes } from '../../../../../types/carbon';

export interface TrustRadiusStateTheme {
  theme: CarbonThemes;
}

const setThemeReducer: Reducer<
  TrustRadiusStateTheme,
  TrustRadiusActionSetTheme
> = (state, action) => ({
  ...(state || {}),
  theme: action.theme,
});

export default setThemeReducer;
