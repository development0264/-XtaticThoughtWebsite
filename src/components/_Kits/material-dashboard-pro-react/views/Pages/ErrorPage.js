import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "@material-dashboard-pro-react/components/Grid/GridContainer.js";
import GridItem from "@material-dashboard-pro-react/components/Grid/GridItem.js";

import styles from "@material-dashboard-pro-react/assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

export default function ErrorPage() {
  const classes = useStyles();
  return (
    <div className={classes.contentCenter}>
      <GridContainer>
        <GridItem md={12}>
          <h1 className={classes.title}>404</h1>
          <h2 className={classes.subTitle}>Page not found :(</h2>
          <h4 className={classes.description}>
            Ooooups! Looks like you got lost.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
