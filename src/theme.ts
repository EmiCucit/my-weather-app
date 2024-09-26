import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6c757d' },
    secondary: { main: '#adb5bd' },
    background: { default: "#e9ecef" },
    divider: "#343a40"
  },
  shadows: [
    "none",
    "0px 1px 3px rgba(0, 0, 0, 0.2)",
    "0px 1px 5px rgba(0, 0, 0, 0.2)",
    "0px 1px 8px rgba(0, 0, 0, 0.2)",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#f8f9fa' },
    secondary: { main: '#adb5bd' },
    background: { default: "#343a40" },
    divider: "#e9ecef"
  },
  shadows: [
    "none",
    "0px 1px 3px #495057",
    "0px 1px 5px #495057",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
});
