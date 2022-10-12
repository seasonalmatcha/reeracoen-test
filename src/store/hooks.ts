import {
  TypedUseSelectorHook,
  useDispatch as ogUseDispatch,
  useSelector as ogUseSelector,
} from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useSelector: TypedUseSelectorHook<RootState> = ogUseSelector;
export const useDispatch = () => ogUseDispatch<AppDispatch>();
