import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NextLinkNoStyle from "../../blocks/NextLinkNoStyle";
import { strings } from "../../constants";
import { connect } from "react-redux";
import { setDarkMode } from "../../components/SiteState/state/actions";
import {
  Grid,
  Container
} from "@material-ui/core";
import {
  mrAuto,
  mlAuto,
  title,
  description,
} from "@material-kit-pro-react/assets/jss/material-kit-pro-react.js";



const fontFamily = `"Roboto", "Times New Roman", serif`;
const teamStyle = (theme) => ({
  wwaSection: {

  },
  gradientText: {

  },
  wwaContainer: {
    paddingBottom: "150px",
    paddingTop: "244px",
    '@media (max-width: 575px)': {
      paddingBottom: "90px",
      paddingTop: "120px",
    },
    "&  h1": {
      textAlign: "center",
      fontSize: "100px",
      lineHeight: "127px",
      fontFamily: "Audiowide",
      fontWeight: "normal",
      textTransform: "uppercase",
      margin: "0 0 50px 0",
      background: "-webkit-linear-gradient(45deg,  #00FFFF, #40FF00)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      '@media (max-width: 1199px)': {
        fontSize: 50,
        lineHeight: "normal",
        margin: "0 0 20px 0",
      },
      '@media (max-width: 575px)': {
        fontSize: "35px",
      },
    },
    "&  h3": {
      fontSize: "50px",
      lineHeight: "61px",
      textAlign: "center",
      fontWeight: "normal",
      fontFamily: "Montserrat",
      margin: "0",
      '@media (max-width: 1199px)': {
        fontSize: 30,
        lineHeight: "normal"
      },
      '@media (max-width: 575px)': {
        fontSize: 20,
      },
    },
  },
  contactUsingSection: {
    backgroundColor: "#000000",
    display: 'flex',
    border: "1px solid #D8D8D8",
    '@media (max-width: 991px)': {
      flexWrap: "wrap",
      padding: "0 24px",
      border: "none",
      backgroundColor: "transparent",
    },
    "& > div + div": {
      borderLeft: "1px solid #D8D8D8",
      '@media (max-width: 991px)': {
        borderLeft: "none",
        marginTop: 30,
      },
    },
    "& > div": {
      '@media (max-width: 991px)': {
        border: "1px solid #D8D8D8 !important",
      },
    },
  },
  contactUsingBox: {
    width: "33.33%",
    flex: "0 0 33.33%",
    '@media (max-width: 991px)': {
      width: "100%",
      flex: "0 0 100%",
      backgroundColor: "#000000",
    },
  },
  contactUsingBoxInner: {
    position: "relative",
    padding: "30px 50px 124px 50px",
    '@media (max-width: 1199px)': {
      padding: "20px 50px 124px 30px",
    },
    "& h4": {
      margin: 0,
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "35px",
      lineHeight: "43px",
      color: "#FFFFFF",
      position: 'relative',
      zIndex: '1',
      '@media (max-width: 1199px)': {
        fontSize: "25px",
      },
    },
    "& .animatedShapeBg": {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      objectFit: "cover",
      height: "100%",
      transition: "all 0.3s ease 0s",
      opacity: "0",
      visibility: "hidden",
    },
    "&:hover .animatedShapeBg": {
      opacity: "1",
      visibility: "visible",
    },
    "& .animatedShapeLeft": {
      position: "absolute",
      left: "0",
      bottom: "30px",
      zIndex: "1",
      transition: "all 0.6s ease 0s",
      width: "0",
      overflow: "hidden",
    },
    "& .animatedShapeRight": {
      position: "absolute",
      right: "0",
      top: "0",
      zIndex: "1",
      transition: "all 0.6s ease 0s",
      width: "0",
      overflow: "hidden",
      textAlign: "right",
      lineHeight: "0",
      height: "100%",
    },
    "&:hover .animatedShapeLeft": {
      width: "228px",
    },
    "&:hover .animatedShapeRight": {
      width: "208px",
    },
  },
  animatedShapeLeftImg: {

  },
  animatedShapeRightImg: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  redirectLink: {
    position: "absolute",
    bottom: "31px",
    lineHeight: "0",
    right: "50px",
    zIndex: 1,
    '@media (max-width: 1199px)': {
      right: "20px",
      bottom: "20px",
    },
    '& img': {
      width: "20px",
    },
  },
});
// @ts-ignore
const useStyles = makeStyles(teamStyle);

function SectionTeam(props) {
  const classes = useStyles();
  return (
    <>
      <section className={classes.wwaSection}>
        <Container className={classes.wwaContainer}>
          <Grid item xs={12}>
            <h1 data-aos="fade-down" data-aos-duration="1000">Xtatic Thought</h1>
            <h3 data-aos="fade-up" data-aos-duration="1000">Limitless Opportunity</h3>
          </Grid>
        </Container>
        <div className={classes.contactUsingSection}>
          <div className={classes.contactUsingBox}>
            <div className={classes.contactUsingBoxInner} data-aos="fade-right" data-aos-duration="1000">
              <div className="animatedShapeLeft"><img src="./images/contactusing-left.png" className={classes.animatedShapeLeftImg}></img></div>
              <div className="animatedShapeRight"><img src="./images/contactusing-right.png" className={classes.animatedShapeRightImg}></img></div>
              <h4>Dashboard</h4>
              <img className="animatedShapeBg" src="./images/contactusing-bg.png"></img>
              <a href="#" className={classes.redirectLink}><img src="./images/right-down.png"></img></a>
            </div>
          </div>
          <div className={classes.contactUsingBox}>
            <div className={classes.contactUsingBoxInner} data-aos="zoom-in" data-aos-duration="1000">
              <div className="animatedShapeLeft"><img src="./images/contactusing-left.png" className={classes.animatedShapeLeftImg}></img></div>
              <div className="animatedShapeRight"><img src="./images/contactusing-right.png" className={classes.animatedShapeRightImg}></img></div>
              <h4>Table</h4>
              <img className="animatedShapeBg" src="./images/contactusing-bg.png"></img>
              <a href="#" className={classes.redirectLink}><img src="./images/right-down.png"></img></a>
            </div>
          </div>
          <div className={classes.contactUsingBox} >
            <div className={classes.contactUsingBoxInner} data-aos="fade-left" data-aos-duration="1000">
              <div className="animatedShapeLeft"><img src="./images/contactusing-left.png" className={classes.animatedShapeLeftImg}></img></div>
              <div className="animatedShapeRight"><img src="./images/contactusing-right.png" className={classes.animatedShapeRightImg}></img></div>
              <h4>Xtatic Labs</h4>
              <img className="animatedShapeBg" src="./images/contactusing-bg.png"></img>
              <a href="#" className={classes.redirectLink}><img src="./images/right-down.png"></img></a>
            </div>
          </div>
        </div>
      </section >
    </>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.siteState.darkMode,
});

const mapDispatchToProps = {
  setDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(SectionTeam);
