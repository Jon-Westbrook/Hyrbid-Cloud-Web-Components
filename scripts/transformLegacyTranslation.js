// eslint-disable-next-line @typescript-eslint/no-var-requires
const { readFileSync } = require('fs');

function isPOJO(arg) {
  if (arg == null || typeof arg !== 'object') {
    return false;
  }

  const proto = Object.getPrototypeOf(arg);
  if (proto == null) {
    return true; // `Object.create(null)`
  }
  return proto === Object.prototype;
}

const output = {};

function transformLegacyTranslation(originalData, pathPrefix = '') {
  if (Array.isArray(originalData)) {
    originalData.forEach((item, index) =>
      transformLegacyTranslation(item, `${pathPrefix}.${index}`, output),
    );
    return;
  }
  if (isPOJO(originalData)) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Array.from(Object.entries(originalData)).reduce(
      (carry, [key, value]) => ({
        ...carry,
        [key]: transformLegacyTranslation(value, `${pathPrefix}.${key}`),
      }),
      {},
    );
    return;
  }
  output[pathPrefix.replace(/^\./, '')] = { defaultMessage: originalData };
}

const [inputFilename] = process.argv.slice(2);

const inputContents = readFileSync(inputFilename);
const originalData = JSON.parse(inputContents);
transformLegacyTranslation(originalData);
console.log(JSON.stringify(output, null, 2));
