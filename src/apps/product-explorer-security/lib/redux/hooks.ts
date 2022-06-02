import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {
  ProductExplorerSecurityState,
  ProductExplorerSecurityDispatch,
} from './store';

export const useProductExplorerSecurityDispatch =
  (): ProductExplorerSecurityDispatch =>
    useDispatch<ProductExplorerSecurityDispatch>();
export const useProductExplorerSecuritySelector: TypedUseSelectorHook<ProductExplorerSecurityState> =
  useSelector;
