import type { AppProps } from 'next/app';
import { useState } from 'react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {
  CssBaseline,
  Container,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material';
import { Hydrate, QueryClient, QueryClientProvider, DehydratedState } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { Navbar } from '@/components';
import { store } from '@/store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createEmotionCache } from '@/utils';
import { lightThemeOptions } from '@/styles/theme';
import '../styles/globals.css';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps: AppProps['pageProps'] & {
    dehydratedState: DehydratedState;
  };
}

const clientSideEmotionCache = createEmotionCache();
const lightTheme = responsiveFontSizes(createTheme(lightThemeOptions));

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <ReduxProvider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Navbar />
              <Container sx={{ my: 4 }}>
                <Component {...pageProps} />
              </Container>
            </Hydrate>
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    </ReduxProvider>
  );
};

export default MyApp;
