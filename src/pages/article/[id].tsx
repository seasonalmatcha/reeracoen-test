import { useRouter } from 'next/router';
import { useSelector } from '@/store';
import { useEffect } from 'react';
import { colors, Box, Chip, Stack, Typography } from '@mui/material';
import Head from 'next/head';

const ArticlePage = () => {
  const router = useRouter();
  const { article } = useSelector((state) => state.articleStore);

  useEffect(() => {
    if (!article) {
      router.push('/');
    }
  }, [article, router]);

  if (!article) return null;

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <Box>
        <Typography variant="h4" component="h1">
          {article.title}
        </Typography>
        <Typography variant="h6" color={colors.grey[500]}>
          {article.byline}
        </Typography>
        <Typography variant="body2" color={colors.grey[500]}>
          {new Date(article.published_date).toLocaleDateString()}
        </Typography>

        <Box sx={{ my: 6 }}>
          <Typography>{article.abstract}</Typography>
        </Box>

        <Stack direction="row" flexWrap="wrap">
          {article.des_facet.map((item) => (
            <Chip key={item} variant="outlined" sx={{ mr: 1, mb: 1 }} label={`# ${item}`} />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default ArticlePage;
