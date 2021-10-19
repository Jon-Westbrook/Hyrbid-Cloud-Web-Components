import { CarbonThemes } from '../../../../../types/carbon';
import { Action } from 'redux';

export interface TrustRadiusActionSetTheme extends Action<'SET_THEME'> {
  theme: CarbonThemes;
}

const _castToCarbonEnum = (input: string) => {
  switch (input) {
    case CarbonThemes.GRAY_100:
      return CarbonThemes.GRAY_100;
    case CarbonThemes.GRAY_10:
      return CarbonThemes.GRAY_10;
    default:
      return CarbonThemes.WHITE;
  }
};

const setThemeAction = (theme: string): TrustRadiusActionSetTheme => ({
  type: 'SET_THEME',
  theme: _castToCarbonEnum(theme),
});

export default setThemeAction;
