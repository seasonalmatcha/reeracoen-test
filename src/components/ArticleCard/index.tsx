import { colors, Box, Typography } from '@mui/material';
import { Article } from '@/types';

export const ArticleCard = ({ abstract, title }: Article) => {
  return (
    <Box
      border={1}
      borderColor={colors.grey[400]}
      p={2}
      height="100%"
      color={colors.grey[900]}
      sx={{
        transition: 'all .25s ease-in-out',
        ':hover': {
          color: colors.blue[500],
          boxShadow: '8px 10px 2px 0px rgba(0,0,0,0.15);',
          transform: 'translate(-8px, -10px)',
        },
      }}
    >
      <Typography variant="h6" component="h3" sx={{ fontWeight: 500, mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" color={colors.grey[500]}>
        {abstract}
      </Typography>
    </Box>
  );
};
