import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
  },
  palette: {
    primary: {
      contrastText: '#fff',
      dark: '#000',
      light: '#3c4044',
      main: '#161a1d',
    },
    secondary: {
      contrastText: '#000',
      dark: '#c79700',
      light: '#fffa53',
      main: '#ffc70c',
    },
    success: {
      main: '#23D567',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
