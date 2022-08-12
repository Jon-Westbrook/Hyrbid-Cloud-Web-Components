import { stripUnit, respondBase } from '@castiron/style-mixins';
import { theme } from '../constants';

const { breakpoints } = theme;

const fluidScaleBase = (max, min, maxVw, minVw) => {
  const maxNum = stripUnit(max);
  const minNum = stripUnit(min);

  if (minNum > maxNum) {
    return `clamp(${max}, ${fluidScaleCalc(max, min, maxVw, minVw)}, ${min})`;
  }

  return `clamp(${min}, ${fluidScaleCalc(max, min, maxVw, minVw)}, ${max})`;
};

// return fluid-scale calc value
const fluidScaleCalc = (maxValue, minValue, maxVw, minVw) => {
  return `calc(${minValue} + ${
    stripUnit(maxValue) - stripUnit(minValue)
  } * (100vw - ${minVw}) / ${stripUnit(maxVw) - stripUnit(minVw)})`;
};

export function fluidScale(
  max,
  min,
  maxVw = breakpoints.wide,
  minVw = breakpoints.narrow,
) {
  if (max === min) return max;
  return fluidScaleBase(max, min, maxVw, minVw);
}

export function fluidShrink(max, maxVw = breakpoints.wide) {
  return `min(${max}, ${((stripUnit(max) / stripUnit(maxVw)) * 100).toFixed(
    3,
  )}vw)`;
}

export function respond(
  content,
  pxSize = breakpoints.narrow,
  operator = 'max',
  aspect = 'width',
) {
  return respondBase(content, pxSize, operator, aspect);
}
