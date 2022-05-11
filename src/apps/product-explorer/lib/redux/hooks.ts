import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { ProductExplorerState, ProductExplorerDispatch } from './store';

export const useAppDispatch = (): ProductExplorerDispatch =>
  useDispatch<ProductExplorerDispatch>();
export const useAppSelector: TypedUseSelectorHook<ProductExplorerState> =
  useSelector;
