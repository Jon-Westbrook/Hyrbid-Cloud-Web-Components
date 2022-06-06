import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {
  ProductExplorerItInfraState,
  ProductExplorerItInfraDispatch,
} from './store';

export const useProductExplorerItInfraDispatch =
  (): ProductExplorerItInfraDispatch =>
    useDispatch<ProductExplorerItInfraDispatch>();
export const useProductExplorerItInfraSelector: TypedUseSelectorHook<ProductExplorerItInfraState> =
  useSelector;
