const dynamicFontSizePercent = (
  text: string,
  maxWords = 18,
  reductionIndex = 6,
): number => {
  // Count all words.
  const cleanText = text.replace(/ +/g, ' ');
  const numWords = cleanText.split(' ').length;
  // If there are fewer words than the max this returns 100 = 100 - 0 * 6.
  const percent = 100 - Math.max(numWords - maxWords, 0) * reductionIndex;
  // At least it should be 10%.
  return Math.max(percent, 10);
};

export default dynamicFontSizePercent;
