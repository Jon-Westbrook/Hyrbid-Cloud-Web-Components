import { CarbonBreakpoints } from 'src/types/carbon';

export function generateRowNumArray(
  categories: string[],
  multiple: number,
): number[] {
  if (multiple < 1 || multiple > 3) multiple = 1;
  const rowNumArray: number[] = [];
  for (let i = 1; i <= categories.length; i++) {
    for (let j = 1; j <= multiple; j++) {
      rowNumArray.push(i);
    }
  }
  return rowNumArray;
}

export function generateIndexArray(
  categories: string[],
  multiple: number,
): (number | null)[] {
  if (multiple < 1 || multiple > 3) multiple = 1;
  return Array(categories.length + multiple)
    .fill(0)
    .map((num, i) => (i % multiple === 0 ? i : null))
    .filter((item) => item !== null);
}

export function defineGridRow(
  width: number | undefined,
  index: number,
  categories: string[],
): any {
  if (width === undefined) return '1';
  let indexArray;
  let rowNumArray;

  if (width >= CarbonBreakpoints.LG) {
    // 3 cols
    indexArray = generateIndexArray(categories, 3);
    rowNumArray = generateRowNumArray(categories, 3);
    for (const el of indexArray) {
      if (el !== null && index < el) {
        return String(rowNumArray[el]);
      }
    }
  } else if (width >= CarbonBreakpoints.MD) {
    // 2 cols
    indexArray = generateIndexArray(categories, 2);
    rowNumArray = generateRowNumArray(categories, 2);
    for (const el of indexArray) {
      if (el !== null && index < el) {
        return String(rowNumArray[el]);
      }
    }
  } else {
    // 1 col
    return String(index + 2);
  }
}
