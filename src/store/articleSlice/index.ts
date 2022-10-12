import { Article } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ArticleState = {
  article: Article | null;
};

const initialState: ArticleState = {
  article: null,
};

const articleSlice = createSlice({
  name: 'articleStore',
  initialState,
  reducers: {
    setArticle: (state: ArticleState, action: PayloadAction<Article>) => {
      state.article = action.payload;
    },
  },
});

export default articleSlice.reducer;
export const { setArticle } = articleSlice.actions;
