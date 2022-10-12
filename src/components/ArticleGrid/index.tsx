import { Grid, GridProps, Link } from '@mui/material';
import NextLink from 'next/link';

import { ArticleCard } from '@/components';
import { Article } from '@/types';
import { setArticle, useDispatch } from '@/store';

export interface ArticleGridProps extends GridProps {
  articles: Article[];
}

export const ArticleGrid = ({ articles, ...props }: ArticleGridProps) => {
  const dispatch = useDispatch();

  const handleClick = (article: Article) => {
    return () => {
      dispatch(setArticle(article));
    };
  };

  return (
    <>
      {articles.map((article) => (
        <Grid key={article.id} item {...props}>
          <NextLink href={`/article/${article.id}`} passHref>
            <Link underline="none" onClick={handleClick(article)}>
              <ArticleCard {...article} />
            </Link>
          </NextLink>
        </Grid>
      ))}
    </>
  );
};
