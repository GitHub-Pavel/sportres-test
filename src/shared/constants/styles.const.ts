import { createTheme, Theme } from '@mui/material';
import { color } from '@/shared/utils';

const Inter = 'Inter, Roboto, Arial, sans-serif';

export const PRIMARY_THEME = createTheme({
  spacing: 5,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          color: '#06082C',
          background: '#EEF0F7',
          boxShadow: 'none',
          borderRadius: 10,

          ':hover': {
            background: '#9395B8',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: color(700),
        fontWeight: 500,
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          body1: 'div',
          body2: 'div',
          button: 'span',
        },
      },
    },
  },
  typography: {
    fontFamily: Inter,
    htmlFontSize: 14,
    h1: {
      fontSize: 40,
      lineHeight: 1.3,
      letterSpacing: -0.1,
      fontWeight: 600,
    },
    h2: {
      fontSize: 20,
      lineHeight: 1.3,
      letterSpacing: '-0.7px',
      fontWeight: 600,
    },
    button: {
      fontSize: 14,
      letterSpacing: '-0.5px',
      textAlign: 'center',
      fontWeight: 500,
      lineHeight: '20px',
      textTransform: 'none',
    },
    body1: {
      fontWeight: 500,
      fontSize: 14,
      lineHeight: '20px',
      letterSpacing: '-0.5px',
    },
    body2: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: 1.5,
    },
  },
  palette: {
    primary: {
      50: '#FFFFFF',
      200: '#EEF0F7',
      400: '#9395B8',
      500: '#7B7EA5',
      600: '#353754',
      700: '#06082C',
    },
  },
});

export const GLOBAL_STYLES = (theme: Theme) => ({
  body: {
    background: color(200)(theme),
  },
});
