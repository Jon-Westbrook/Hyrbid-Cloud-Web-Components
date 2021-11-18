import { CarbonThemes } from '../types/carbon';

const mapPaletteToTheme = (serializedPalette: string): CarbonThemes => {
  try {
    let id;
    try {
      id = JSON.parse(serializedPalette).id;
    } catch (e) {}
    switch (id) {
      case 'palette-grey-light':
        return CarbonThemes.GRAY_10;
      case 'palette-black':
        return CarbonThemes.GRAY_100;
      default:
        return CarbonThemes.WHITE;
    }
  } catch (e) {
    return CarbonThemes.WHITE;
  }
};

export default mapPaletteToTheme;
