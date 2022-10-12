import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import articleReducer from './articleSlice';

export const store = configureStore({
  reducer: {
    articleStore: articleReducer,
    newsFilter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
