import { NewsPeriod, NewsType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type NewsFilterState = {
  type: NewsType;
  period: NewsPeriod;
};

const initialState: NewsFilterState = {
  type: 'viewed',
  period: '1',
};

const filterSlice = createSlice({
  name: 'newsFilter',
  initialState,
  reducers: {
    setNewsType: (state: NewsFilterState, action: PayloadAction<NewsType>) => {
      state.type = action.payload;
    },
    setNewsPeriod: (state: NewsFilterState, action: PayloadAction<NewsPeriod>) => {
      state.period = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setNewsType, setNewsPeriod } = filterSlice.actions;
