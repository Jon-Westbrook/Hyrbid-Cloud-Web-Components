import { useSelector } from 'react-redux';
import {
  NamedBreakpoint,
  selectBreakpoint,
} from '../lib/redux/slices/browserSlice';

const dynamicFontSizePercent = (
  text: string,
  maxWordsPerBreakpoint: Partial<Record<NamedBreakpoint, number>>,
  reductionIndex = 6,
): number => {
  // Depending on the breakpoint the maxlength varies.
  const breakpoint = useSelector(selectBreakpoint);
  const maxWords = maxWordsPerBreakpoint[breakpoint] || 18;
  // Count all words.
  const cleanText = text.replace(/ +/g, ' ');
  const numWords = cleanText.split(' ').length;
  // If there are fewer words than the max this returns 100 = 100 - 0 * 6.
  const percent = 100 - Math.max(numWords - maxWords, 0) * reductionIndex;
  // At least it should be 10%.
  return Math.max(percent, 10);
};

export default dynamicFontSizePercent;
