import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TrustRadiusState, TrustRadiusDispatch } from './store';

export const useTrustRadiusDispatch = (): TrustRadiusDispatch =>
  useDispatch<TrustRadiusDispatch>();
export const useTrustRadiusSelector: TypedUseSelectorHook<TrustRadiusState> =
  useSelector;
