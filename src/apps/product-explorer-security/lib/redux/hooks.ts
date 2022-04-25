import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {
  ProductExplorerSecurityState,
  ProductExplorerSecurityDispatch,
} from './store';

export const useAppDispatch = (): ProductExplorerSecurityDispatch =>
  useDispatch<ProductExplorerSecurityDispatch>();
export const useAppSelector: TypedUseSelectorHook<ProductExplorerSecurityState> =
  useSelector;
