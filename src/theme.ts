import { ThemeOptions } from "@material-ui/core";

export const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      main: "#000",
      text: { primary: "#fff" }
    },
    background: { default: "#000" }
  }
} as ThemeOptions;

export const lightTheme = {
  palette: {
    type: "light",
    primary: {
      main: "#0d0554"
    }
  }
} as ThemeOptions;
