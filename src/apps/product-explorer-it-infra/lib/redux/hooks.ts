import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {
  ProductExplorerItInfraState,
  ProductExplorerItInfraDispatch,
} from './store';

export const useAppDispatch = () =>
  useDispatch<ProductExplorerItInfraDispatch>();
export const useAppSelector: TypedUseSelectorHook<ProductExplorerItInfraState> =
  useSelector;
