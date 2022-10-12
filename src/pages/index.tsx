import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Grid, Typography } from '@mui/material';

import { ArticleGrid, NewsFilter, SkeletonGrid } from '@/components';
import { useQuery } from 'react-query';
import { APIResponse, Article } from '@/types';
import { getPopularNews } from '@/api';
import { useSelector } from '@/store';

const Home: NextPage = () => {
  const { type, period } = useSelector((state) => state.newsFilter);

  const { isLoading, isFetching, data, error } = useQuery<
    APIResponse<Article>,
    { message: string } | undefined
  >([type, period], () => getPopularNews(type, period));

  if (error) {
    return (
      <Box mt={4}>
        <Typography>{error.message}</Typography>
      </Box>
    );
  }

  return (
    <div>
      <Head>
        <title>Reeracoen Test</title>
      </Head>

      <Typography variant="h4" component="h2">
        The New York Times Popular News
      </Typography>

      <Box sx={{ mt: 4 }}>
        <NewsFilter />
      </Box>

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {isLoading || isFetching ? (
          <SkeletonGrid />
        ) : (
          <ArticleGrid articles={data?.results ?? []} xs={12} sm={6} md={4} />
        )}
      </Grid>
    </div>
  );
};

export default Home;
