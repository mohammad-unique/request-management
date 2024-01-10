import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const theme = createTheme({
  direction: "rtl",
  typography:{
    fontFamily : "'Vazir', sans-serif !important"
  }
});

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <RTL>{children}</RTL>
    </ThemeProvider>
  );
};
