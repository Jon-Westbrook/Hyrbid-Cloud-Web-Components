import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type {
  SolutionsExplorerItInfraState,
  SolutionsExplorerItInfraDispatch,
} from './store';

export const useSolutionsExplorerItInfraDispatch =
  (): SolutionsExplorerItInfraDispatch =>
    useDispatch<SolutionsExplorerItInfraDispatch>();
export const useSolutionsExplorerItInfraSelector: TypedUseSelectorHook<SolutionsExplorerItInfraState> =
  useSelector;
