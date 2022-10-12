import { AppBar, Link, Stack } from '@mui/material';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar color="inherit" position="sticky" variant="outlined" sx={{ p: 2 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <NextLink href="/" passHref>
          <Link underline="hover">Home</Link>
        </NextLink>
        <Link
          href="https://github.com/seasonalmatcha/reeracoen-test"
          target="_blank"
          rel="noreferrer"
          underline="hover"
        >
          Source
        </Link>
      </Stack>
    </AppBar>
  );
};
