import { CarbonThemes } from '../../../../../types/carbon';
import { Action } from 'redux';

export interface TrustRadiusActionSetTheme extends Action<'SET_THEME'> {
  theme: CarbonThemes;
}

const setThemeAction = (theme: CarbonThemes): TrustRadiusActionSetTheme => ({
  type: 'SET_THEME',
  theme,
});
