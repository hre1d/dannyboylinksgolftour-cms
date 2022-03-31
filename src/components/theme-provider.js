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
    body1:{
      fontFamily: [
        'Raleway',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: "1rem",
      lineHeight:"1rem",
      fontWeight: 400,
      letterSpacing:"-0.5px",
      color: "#fff",
      textShadow: "none",
      "@media (min-width:600px)": {
        fontSize: "1.1rem",
        lineHeight:"1.1rem",
      },
    },
    body2:{
      textShadow: "2px 2px #000",
      letterSpacing:"-0.5px",
      color: "#fff",
    },
    button: {
      marginTop: "24px",
      backgroundColor: "#2c362a",
      color: "#fff",
      fontWeight: 500
    }
  },
  palette: {
    primary: {
      main: '#ccc'
    },
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: "#2c362a",
        borderRadius: "5px",
        margin: "0 5px",
        color: "#fff",
        fontWeight: 500,
        fontSize: "0.9rem",
        "@media (min-width:600px)": {
          width:"auto",
        },
        "@media (min-width:960px)": {},
        "&:hover": {
          backgroundColor: "#374135",
          boxShadow: "none",
          transition: "0.25s",
          "@media (hover: none)": {
            backgroundColor: "#a2d641"
          }
        }
      },
      text:{
        padding: "8px 16px",
      }
    }
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