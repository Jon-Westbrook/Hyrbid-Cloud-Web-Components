import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { ProductExplorerState, ProductExplorerDispatch } from './store';

export const useProductExplorerDispatch = (): ProductExplorerDispatch =>
  useDispatch<ProductExplorerDispatch>();
export const useProductExplorerState: TypedUseSelectorHook<ProductExplorerState> =
  useSelector;
