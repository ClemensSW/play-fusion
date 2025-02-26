import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#338024",
    },
    secondary: {
      main: "#5BE9B9",
    },
    background: {
      default: "#282828",
    },
    customBlue: {
      main: "#0073ff",
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "50px",
      fontWeight: 500,
      lineHeight: 1.3,
    },
  },
});

export default theme;
