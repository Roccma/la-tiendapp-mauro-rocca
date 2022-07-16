import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9900',
    },
    secondary: {
      main: '#fa9a0a',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;