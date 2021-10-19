import { Reducer } from 'redux';
import { TrustRadiusActionSetTheme } from '../actions/setThemeAction';
import { CarbonThemes } from '../../../../../types/carbon';

export interface TrustRadiusStateTheme {
  theme: CarbonThemes;
}

const setThemeReducer: Reducer<
  TrustRadiusStateTheme,
  TrustRadiusActionSetTheme
> = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...(state || {}),
        theme: action.theme,
      };
    default:
      return state || { theme: CarbonThemes.WHITE };
  }
};

export default setThemeReducer;
