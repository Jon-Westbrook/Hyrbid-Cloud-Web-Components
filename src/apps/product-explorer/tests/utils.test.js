import {
  generateRowNumArray,
  generateIndexArray,
  defineGridRow,
} from '../utils';

const categories = Array(12).fill('');

describe('generateIndexArray', () => {
  it('generates array of numbers of length categories plus multiple divided by multiple', () => {
    const arr1 = generateIndexArray(categories, 1);
    const arr2 = generateIndexArray(categories, 2);
    const arr3 = generateIndexArray(categories, 3);

    expect(arr1).toHaveLength(13);
    expect(arr2).toHaveLength(7);
    expect(arr3).toHaveLength(5);
  });

  it('generates array containing only numbers of multiple', () => {
    const arr1 = generateIndexArray(categories, 1);
    const arr2 = generateIndexArray(categories, 2);
    const arr3 = generateIndexArray(categories, 3);

    expect(arr1).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(arr2).toStrictEqual([0, 2, 4, 6, 8, 10, 12]);
    expect(arr3).toStrictEqual([0, 3, 6, 9, 12]);
  });

  it('returns array with multiple 1 when multiple arg out of supported range', () => {
    const arr1 = generateIndexArray(categories, 0);
    const arr2 = generateIndexArray(categories, 4);

    expect(arr1).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(arr2).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
});

describe('generateRowNumArray', () => {
  it('generates array of numbers of length categories times multiple', () => {
    const arr1 = generateRowNumArray(categories, 1);
    const arr2 = generateRowNumArray(categories, 2);
    const arr3 = generateRowNumArray(categories, 3);

    expect(arr1).toHaveLength(12);
    expect(arr2).toHaveLength(24);
    expect(arr3).toHaveLength(36);
  });

  it('generates array containing each number times multiple', () => {
    const arr1 = generateRowNumArray(categories, 1);
    const arr2 = generateRowNumArray(categories, 2);
    const arr3 = generateRowNumArray(categories, 3);

    expect(arr1).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(arr2).toStrictEqual([
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
    ]);
    expect(arr3).toStrictEqual([
      1,
      1,
      1,
      2,
      2,
      2,
      3,
      3,
      3,
      4,
      4,
      4,
      5,
      5,
      5,
      6,
      6,
      6,
      7,
      7,
      7,
      8,
      8,
      8,
      9,
      9,
      9,
      10,
      10,
      10,
      11,
      11,
      11,
      12,
      12,
      12,
    ]);
  });

  it('returns array with multiple 1 when multiple arg out of supported range', () => {
    const arr1 = generateRowNumArray(categories, 0);
    const arr2 = generateRowNumArray(categories, 4);

    expect(arr1).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(arr2).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });
});

describe('defineGridRow', () => {
  it('returns "1" when width is undefined', () => {
    const gridRow = defineGridRow(undefined, 0, categories);

    expect(gridRow).toBe('1');
  });

  it('returns "2" for indexes 0-2 at wide width', () => {
    const gridRowItem1 = defineGridRow(1056, 0, categories);
    const gridRowItem2 = defineGridRow(1056, 1, categories);
    const gridRowItem3 = defineGridRow(1056, 2, categories);

    expect(gridRowItem1).toBe('2');
    expect(gridRowItem2).toBe('2');
    expect(gridRowItem3).toBe('2');
  });

  it('pushes index 2 to next row at medium width', () => {
    const gridRowItem1 = defineGridRow(672, 0, categories);
    const gridRowItem2 = defineGridRow(672, 1, categories);
    const gridRowItem3 = defineGridRow(672, 2, categories);

    expect(gridRowItem1).toBe('2');
    expect(gridRowItem2).toBe('2');
    expect(gridRowItem3).toBe('3');
  });

  it('pushes indexes 1 and 2 to new rows at narrow width', () => {
    const gridRowItem1 = defineGridRow(671, 0, categories);
    const gridRowItem2 = defineGridRow(671, 1, categories);
    const gridRowItem3 = defineGridRow(671, 2, categories);

    expect(gridRowItem1).toBe('2');
    expect(gridRowItem2).toBe('3');
    expect(gridRowItem3).toBe('4');
  });
});
