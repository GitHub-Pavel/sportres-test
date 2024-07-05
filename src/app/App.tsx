import { FC } from 'react';
import { Home } from '@/pages/home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import { PRIMARY_THEME, GLOBAL_STYLES } from '@/shared/constants';
import '@/shared/constants/i18n.const';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={PRIMARY_THEME}>
        <GlobalStyles styles={GLOBAL_STYLES} />
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
