import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {
  ProductExplorerItInfraState,
  ProductExplorerItInfraDispatch,
} from './store';

export const useAppDispatch = (): ProductExplorerItInfraDispatch =>
  useDispatch<ProductExplorerItInfraDispatch>();
export const useAppSelector: TypedUseSelectorHook<ProductExplorerItInfraState> =
  useSelector;
