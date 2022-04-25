import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, TrustRadiusDispatch } from './store';

export const useAppDispatch = (): TrustRadiusDispatch =>
  useDispatch<TrustRadiusDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
