import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "@material-kit-pro-react/components/Grid/GridContainer.js";
import GridItem from "@material-kit-pro-react/components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {
  title,
  description,
  mrAuto,
  mlAuto,
} from "@material-kit-pro-react/assets/jss/material-kit-pro-react.js";
import imagesStyles from "@material-kit-pro-react/assets/jss/material-kit-pro-react/imagesStyles.js";
import CardMedia from "@material-ui/core/CardMedia";

const imgRaised = imagesStyles.imgRaised;
const rounded = imagesStyles.imgRounded;
const imgFluid = imagesStyles.imgFluid;

const officeStyle = (theme) => ({
  title: {
    ...title,
    color: theme.palette.text.primary,
  },
  description,
  mrAuto,
  mlAuto,
  textCenter: {
    textAlign: "center!important",
  },
  office: {
    maxWidth: "1140px",
    margin: "auto",
    fontSize: `"Roboto", "Times New Roman", serif !important`,
  },
  imgCard: {
    width: "380px !important",
    height: "260px !important",
    margin: "20px 0px",
  },
  imgRaised,
  rounded,
  imgFluid,
});

const useStyles = makeStyles(officeStyle);

const aboutUsCompanyData = [
  {
    title: "Learning",
    image: "",
  },
  {
    title: "Content",
    image: "",
  },
  {
    title: "Research",
    image: "",
  },
];

export default function SectionOffice() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>Branches</h2>
          <h4 className={classes.description}>
            Xtatic Thought Inc. is a conglomerate of Ed Tech, Media, and the
            belly of the beast --the research and development division.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <CardMedia
            image={
              "http://www.xtaticart.com/wp-content/uploads/2020/08/learning-scaled.jpg"
            }
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded,
              classes.imgCard
            )}
          />
          {/*<img*/}
          {/*    className={classNames(*/}
          {/*        classes.imgRaised,*/}
          {/*        classes.imgFluid,*/}
          {/*        classes.rounded,*/}
          {/*        classes.imgCard*/}
          {/*    )}*/}
          {/*    src={"/images/learning.jpg"}*/}
          {/*    alt="office1"*/}
          {/*/>*/}
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded,
              classes.imgCard
            )}
            src={
              "http://www.xtaticart.com/wp-content/uploads/2020/08/content-scaled.jpg"
            }
            alt="office2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded,
              classes.imgCard
            )}
            src={
              "http://www.xtaticart.com/wp-content/uploads/2020/08/research-scaled.jpg"
            }
            alt="office3"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
