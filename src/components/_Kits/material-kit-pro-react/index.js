/*!

=========================================================
* Material Kit PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "@material-kit-pro-react/assets/scss/material-kit-pro-react.scss?v=1.9.0";

// pages for this product
import AboutUsPage from "@material-kit-pro-react/views/AboutUsPage/AboutUsPage.js";
import BlogPostPage from "@material-kit-pro-react/views/BlogPostPage/BlogPostPage.js";
import BlogPostsPage from "@material-kit-pro-react/views/BlogPostsPage/BlogPostsPage.js";
import ComponentsPage from "@material-kit-pro-react/views/ComponentsPage/ComponentsPage.js";
import ContactUsPage from "@material-kit-pro-react/views/ContactUsPage/ContactUsPage.js";
import EcommercePage from "@material-kit-pro-react/views/EcommercePage/EcommercePage.js";
import LandingPage from "@material-kit-pro-react/views/LandingPage/LandingPage.js";
import LoginPage from "@material-kit-pro-react/views/LoginPage/LoginPage.js";
import PresentationPage from "@material-kit-pro-react/views/PresentationPage/PresentationPage.js";
import PricingPage from "@material-kit-pro-react/views/PricingPage/PricingPage.js";
import ProfilePage from "@material-kit-pro-react/views/ProfilePage/ProfilePage.js";
import ProductPage from "@material-kit-pro-react/views/ProductPage/ProductPage.js";
import SectionsPage from "@material-kit-pro-react/views/SectionsPage/SectionsPage.js";
import ShoppingCartPage from "@material-kit-pro-react/views/ShoppingCartPage/ShoppingCartPage.js";
import SignupPage from "@material-kit-pro-react/views/SignupPage/SignupPage.js";
import ErrorPage from "@material-kit-pro-react/views/ErrorPage/ErrorPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/blog-post" component={BlogPostPage} />
      <Route path="/blog-posts" component={BlogPostsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/ecommerce-page" component={EcommercePage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/pricing" component={PricingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/product-page" component={ProductPage} />
      <Route path="/sections" component={SectionsPage} />
      <Route path="/shopping-cart-page" component={ShoppingCartPage} />
      <Route path="/signup-page" component={SignupPage} />
      <Route path="/error-page" component={ErrorPage} />
      <Route path="/" component={PresentationPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
