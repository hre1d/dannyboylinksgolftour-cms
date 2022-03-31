import React from "react"
import { createTheme, ThemeProvider, CssBaseline, makeStyles } from '@material-ui/core'
import "@fontsource/sarala"; // Defaults to weight 400.

const useGlobalStyles = makeStyles({
  "@global": {
    body: {
      margin:"0px",
      backgroundColor: "#2c362a"
    }
  }
});
const theme = createTheme({
  typography: {
    fontFamily: [
      'Sarala',
      'KnowledgeLight',
      'Raleway',
      'Helvetica',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h2: {
      letterSpacing:"-1px",
      fontSize:"2.6rem",
      color: "#fff",
      textShadow: "2px 2px #000",
      '@media (min-width:780px)': {
        fontSize:"2.8rem",
      }
    },
    body2:{
      textShadow: "2px 2px #000",
      letterSpacing:"-0.5px",
      color: "#fff",
    } 
  },
  palette: {
    primary: {
      main: '#ccc'
    },
  }

});

function MyThemeProvider({ children }) {
  useGlobalStyles();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const Theme = ({ path, children }) => {
  return (
    <MyThemeProvider>
      <CssBaseline />
      {children}
    </MyThemeProvider>
  )
}
export default Theme