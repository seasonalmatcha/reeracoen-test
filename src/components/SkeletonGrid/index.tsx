import { colors, Box, Grid, Skeleton, Stack } from '@mui/material';

export const SkeletonGrid = () => {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <Grid key={i} item xs={12} sm={6} md={4}>
          <Box border={1} borderColor={colors.grey[400]} p={2} height="100%">
            <Skeleton variant="rectangular" width="100%" height={24} sx={{ mb: 2 }} />
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width="90%" height={12} />
              <Skeleton variant="rectangular" width="60%" height={12} />
              <Skeleton variant="rectangular" width="80%" height={12} />
              <Skeleton variant="rectangular" width="70%" height={12} />
            </Stack>
          </Box>
        </Grid>
      ))}
    </>
  );
};
