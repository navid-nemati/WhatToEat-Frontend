"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { rtlCache } from "./rtlCache";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },

  //1e88e5
  palette: {
    mode: "light",
    primary: { main: "#009966" },
    secondary: { main: "#FED8B1" },
    background: { default: "#f5f5f5" },
  },
},
);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
