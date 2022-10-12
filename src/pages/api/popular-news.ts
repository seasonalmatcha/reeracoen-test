import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '@/env/server.mjs';
import { APIResponse, Article } from '@/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const newsType = req.query.type as string;
  const newsPeriod = req.query.period as string;

  const url = `${env.NYT_ENDPOINT}/${newsType}/${newsPeriod}.json?api-key=${env.NYT_API_KEY}`;

  try {
    const response = await fetch(url);

    if (response.status === 401) {
      res.status(401).json({
        error: 'Invalid API Key',
      });
      return;
    }

    if (response.status === 429) {
      res.status(429).json({
        error: 'Too many request',
      });
      return;
    }

    const json = (await response.json()) as APIResponse<Article>;
    res.status(200).json(json);
  } catch (e) {
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

export default handler;
