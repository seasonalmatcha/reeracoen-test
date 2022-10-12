import { APIResponse, Article, NewsPeriod, NewsType } from '@/types';

export const getPopularNews = async (type: NewsType, period: NewsPeriod) => {
  const res = await fetch(`/api/popular-news?type=${type}&period=${period}`);

  const json = await res.json();

  if (res.status !== 200) {
    throw new Error(json.error);
  }

  return json as APIResponse<Article>;
};
