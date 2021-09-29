import i18n from './i18n';

describe('i18n', function () {
  it('should map locale codes correctly', () => {
    expect.assertions = 10;
    const pairs = new Map([
      ['en', 'en'],
      ['en-us', 'en'],
      [null, 'en'],
      ['es-es', 'es'],
      ['es-', 'es'],
      ['it-lorem ipsum dolor- sit--', 'it'],
      ['zhcn', 'zh-cn'],
      ['zhtw', 'zh-tw'],
      ['esla', 'esla'],
      ['foo', 'en'],
    ]);
    pairs.forEach((value, key) => {
      const l = new i18n(key);
      expect(l.locale).toBe(value);
    });
  });
  it('should have messages', () => {
    expect.assertions = 1;
    const l = new i18n('es-');
    expect(l.messages).toBeDefined();
  });
});
