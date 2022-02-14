import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import GridContainer from "@material-kit-pro-react/components/Grid/GridContainer.js";
import GridItem from "@material-kit-pro-react/components/Grid/GridItem.js";
import Card from "@material-kit-pro-react/components/Card/Card.js";
import CardBody from "@material-kit-pro-react/components/Card/CardBody.js";
import {
  Grid,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { strings, colors } from "../../constants";
import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
} from "@material-kit-pro-react/assets/jss/material-kit-pro-react.js";
// import { Scrollbars } from "react-custom-scrollbars";

const fontFamily = `"Roboto", "Times New Roman", serif`;
const teamStyle = (theme) => ({
  mrAuto,
  mlAuto,
  title: {
    ...title,
    fontFamily: fontFamily,
    fontSize: 20,
    color: colors.headingColorGreen,
    marginLeft: "3%",
    marginBottom: 0,
  },
  newsTitle: {
    marginBottom: "50px",
    fontFamily: "Audiowide",
    fontSize: "50px",
    lineHeight: "64px",
    textAlign: "center",
    fontWeight: "normal",
    letterSpacing: "0.04em",
    marginTop: "100px",
    paddingLeft: 15,
    paddingRight: 15,
    '@media (max-width: 991px)': {
      marginTop: "120px",
      lineHeight: "normal",
      marginBottom: "40px",
      fontSize: "40px",
    },
    '@media (max-width: 767px)': {
      marginTop: "60px",
      marginBottom: "20px",
      fontSize: "30px",
    },
    '@media (max-width: 575px)': {
      fontSize: "26px",
    },
  },
  newsRow: {
    margin: "0 -10px !important",
    width: "auto",
  },
  newsRowWrap: {
    padding: "0 10px",
    '@media (max-width: 959px)': {
      marginBottom: "30px",
    },
  },
  newsRowBox: {

  },
  newsRowBoxInner: {
    display: "flex",
    border: "1px solid #4E4E4E",
    backgroundColor: "#000000",
  },
  newsBoxLeft: {
    width: "190px",
    flex: "0 0 190px",
    '@media (max-width: 575px)': {
      flex: "0 0 120px",
      width: "120px",
    },
    '& img': {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    }
  },
  newsBoxRight: {
    width: "100%",
    padding: "20px",
  },
  newsDate: {
    color: "#ABABAB",
    fontSize: "12px",
    fontFamily: "Montserrat",
  },
  newsBoxTitle: {
    color: "#F1F1F1",
    margin: "0 0 10px 0",
    fontSize: "20px",
    fontFamily: "Raleway",
    fontWeight: "normal",
  },
  newsText: {
    margin: "0 0 10px 0",
    fontFamily: "Montserrat",
    color: "#DEDEDE",
    fontSize: "16px",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  newsReadMore: {
    textAlign: "right",
    '& a': {
      fontSize: "20px",
      fontFamily: "Montserrat",
      textDecoration: "none",
      background: "-webkit-linear-gradient(45deg, #00FFFF, #40FF00)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      fontWeight: "500",
      '@media (max-width: 767px)': {
        fontSize: "16px",
      },
    }
  },
});

let styles = {
  // scrollBarContDiv: {
  //   width: "100%",
  // },
  // gridItemStyle: {
  //   display: "flex",
  //   width: "100%",
  //   padding: 0,
  // },
  // singleItemCard: {
  //   backgroundColor: "red",
  //   display: "flex",
  //   width: "100%",
  //   padding: 0,
  //   marginTop: 10,
  //   marginLeft: 0,
  //   marginRight: 0,
  //   marginBottom: 10,
  //   textAlign: "center",
  // },
  // cardInnerCont: {
  //   display: "flex",
  //   justifyContent: "row",
  //   height: "100%",
  // },
  // cardImage: {
  //   width: 100,
  // },
  // descriptionText: {
  //   fontSize: 15,
  //   color: colors.white,
  //   display: "flex",
  //   width: "80%",
  //   display: "block",
  //   overflow: "hidden",
  // },
  // readMoreDivCont: {
  //   display: "flex",
  //   alignItems: "flex-end",
  // },
  // readMorePara: {
  //   fontSize: 12,
  //   color: colors.white,
  //   fontWeight: "bold",
  //   lineHeight: 1,
  //   textAlign: "center",
  //   display: "flex",
  //   cursor: "pointer",
  // },
  // scrollBar: {
  //   height: 300,
  // },

};

// @ts-ignore
const useStyles = makeStyles(teamStyle);
const gridItemSize = 5;

export default function ImmersiveMarketNewsList(props) {
  const classes = useStyles();

  return (
    <div id="immersive-market-news">
      <Grid item xs={12}>
        <h2 data-aos="zoom-in" data-aos-duration="1000" className={classes.newsTitle}>{strings.IMMERSIVE_MARKET_NEWS}</h2>
      </Grid>
      <Container>
        <Grid container className={classes.newsRow} data-aos="fade-up" data-aos-duration="1000">
          {strings.IMMERSIVE_MARKET_NEWS_LIST.map((item) => (
            <Grid item lg={4} md={4} className={classes.newsRowWrap}>
              <div className={classes.newsRowBox}>
                <div className={classes.newsRowBoxInner}>
                  <div className={classes.newsBoxLeft}><img style={styles.cardImage} src={item.image} /></div>
                  <div className={classes.newsBoxRight}>
                    <span className={classes.newsDate}>{item.date}</span>
                    <h4 className={classes.newsBoxTitle}>{item.heading}</h4>
                    <p className={classes.newsText}>{item.description}</p>
                    <div className={classes.newsReadMore}>
                      <a href="#">{strings.READ_MORE}</a>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <div>
        <h1 className={classNames(classes.title)}>
          {strings.IMMERSIVE_MARKET_NEWS}
        </h1>
      </div>
      <div style={styles.scrollBarContDiv}>
        <GridContainer>
          {strings.IMMERSIVE_MARKET_NEWS_LIST.map((item) => (
            <GridItem
              md={gridItemSize}
              sm={gridItemSize}
              style={styles.gridItemStyle}
              className={classNames(classes.mrAuto, classes.mlAuto)}
              key={item.id}
            >
              <Card style={styles.singleItemCard} onClick={() => { }}>
                <div style={styles.cardInnerCont}>
                  <img style={styles.cardImage} src={item.image} />
                  <p style={styles.descriptionText}>{item.description}</p>

                  <div style={styles.readMoreDivCont}>
                    <p style={styles.readMorePara}>
                      {strings.READ_MORE}
                      <br />
                      ...
                    </p>
                  </div>
                </div>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div> */}
    </div>
  );
}
