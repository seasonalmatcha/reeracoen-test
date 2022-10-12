import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '@/env/server.mjs';
import { APIResponse, Article } from '@/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const newsType = req.query.type as string;
  const newsPeriod = req.query.period as string;

  const url = `${env.NYT_ENDPOINT}/${newsType}/${newsPeriod}.json?api-key=${env.NYT_API_KEY}`;
  const response = await fetch(url);
  const json = (await response.json()) as APIResponse<Article>;
  res.json(json);
};

export default handler;
