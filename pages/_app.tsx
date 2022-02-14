import React from "react";
import { StaticRouter } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { connect } from "react-redux";
import App from "next/app";
import { createWrapper } from "next-redux-wrapper";
import {
  ThemeProvider as MaterialUiThemeProvider,
  createMuiTheme,
  responsiveFontSizes
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/theme";

import withIdentity from "../src/hocs/withIdentity";

import store from "../src/store";
import "../src/font-awesome.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const darkThemeMui = responsiveFontSizes(createMuiTheme(darkTheme));
const lightThemeMui = responsiveFontSizes(createMuiTheme(lightTheme));

const ThemeProvidersConnected = connect(state => {
  return {
    darkMode: state.siteState.darkMode
  };
  AOS.init();
}, null)(({ children, darkMode }) => {
  const customThemeMui = darkMode ? darkThemeMui : lightThemeMui;

  return (
    <MaterialUiThemeProvider theme={customThemeMui}>
      <StyledThemeProvider theme={customThemeMui}>
        <CssBaseline />
        {children}
      </StyledThemeProvider>
    </MaterialUiThemeProvider>
  );
});

const wrapper = createWrapper(() => store);
const MyApp = wrapper.withRedux(
  class _MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

      //Anything returned here can be accessed by the client
      return { pageProps: pageProps };
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector("#jss-server-side");
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { Component, pageProps } = this.props;

      return (
        <ThemeProvidersConnected>
          {process.browser ?
            <BrowserRouter>
              <Component {...pageProps} />
            </BrowserRouter>
            :
            <StaticRouter>
              <Component {...pageProps} />
            </StaticRouter>
          }
        </ThemeProvidersConnected>
      );
    }
  }
);

export default withIdentity(MyApp);
