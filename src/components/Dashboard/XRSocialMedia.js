import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
} from "@material-kit-pro-react/assets/jss/material-kit-pro-react.js";
// import { Scrollbars } from "react-custom-scrollbars";
import ShareIcon from "@material-ui/icons/Share";
import { connect } from "react-redux";
import { setDarkMode } from "../../components/SiteState/state/actions";
import { strings, colors } from "../../constants";
import {
  Grid,
  Container
} from "@material-ui/core";
const fontFamily = `"Roboto", "Times New Roman", serif`;
const teamStyle = (theme) => ({
  mrAuto,
  mlAuto,
  title: {
    ...title,
    fontFamily: fontFamily,
    fontSize: 20,
    color: colors.headingColorGreen,
  },
  textCenter: {
    textAlign: "center!important",
  },
  mediaTitle: {
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
      marginTop: "90px",
      lineHeight: "normal",
      marginBottom: "40px",
      fontSize: "40px",
    },
    '@media (max-width: 767px)': {
      marginTop: "30px",
      marginBottom: "20px",
      fontSize: "30px",
    },
    '@media (max-width: 575px)': {
      fontSize: "26px",
    },
  },
  mediaRow: {
    margin: "0 -10px !important",
    width: "auto",
  },
  mediaRowWrap: {
    padding: "0 10px",
    '@media (max-width: 959px)': {
      marginBottom: "30px",
    },
  },
  mediaRowBox: {

  },
  mediaRowBoxInner: {
    border: "1px solid #4E4E4E",
    backgroundColor: "#000000",
  },
  mediaBoxTop: {
    width: "100%",
    height: "200px",
    '& img': {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    }
  },
  mediaBoxBottom: {
    width: "100%",
    padding: "20px",
  },
  mediaDate: {
    color: "#ABABAB",
    fontSize: "12px",
    fontFamily: "Montserrat",
  },
  mediaBoxTitle: {
    color: "#F1F1F1",
    margin: "0 0 0 0",
    fontSize: "20px",
    fontFamily: "Raleway",
    fontWeight: "normal",
  },
  mediaText: {
    margin: "0 0 10px 0",
    fontFamily: "Montserrat",
    color: "#DEDEDE",
    fontSize: "16px",
    display: "-webkit-box",
    "-webkit-line-clamp": "2",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
  mediaReadMore: {
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
  mediaBoxDateTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  xrSocialMedia: {
    paddingBottom: 200,
    '@media (max-width: 959px)': {
      paddingBottom: "70px",
    },
  }
  // cardItem: {
  //   backgroundColor: "red",
  //   height: 120,
  //   width: "80%",
  //   display: "block",
  //   marginLeft: "auto",
  //   marginRight: " auto",
  // },

  // cardTitle: {
  //   ...cardTitle,
  //   fontFamily: fontFamily,
  //   ["&, & a"]: {
  //     ...cardTitle["&, & a"],
  //     color: theme.palette.text.primary,
  //   },
  //   display: "inline",
  // },
  // img: {
  //   height: 200,
  //   width: 200,
  //   backgroundColor: "green",
  // },
  // cardBody: {},
  // readMoreTextCont: {
  //   display: "inline",
  //   right: 10,
  //   margin: 10,
  //   position: "absolute",
  //   cursor: "pointer",
  // },
  // readMoreText: {
  //   color: theme.palette.text.primary,
  //   fontSize: 13,
  //   lineHeight: 1,
  // },
  // shareImg: {
  //   height: 40,
  //   width: 40,
  //   backgroundColor: "green",
  // },
});

// let styles = {
//   parentDiv: {
//     marginLeft: "3%",
//     marginRight: "3%",
//     marginTop: 0,
//   },
//   mainDivCont: {
//     backgroundColor: "red",
//     height: 200,
//     display: "flex",
//     justifyContent: "column",
//     marginTop: 20,
//   },
//   scrollBar: {
//     height: 500,
//     marginTop: 0,
//   },
//   imgStyle: { width: "20%" },
//   imgStyleForMob: { width: "40%" },
//   imageAndDescDic: {
//     display: "flex",
//     flexDirection: "row",
//     flex: 1,
//   },
//   headingAndDescCont: {
//     display: "flex",
//     flex: 1,
//     flexDirection: "column",
//     marginLeft: "2%",
//   },
//   headingText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: colors.black,
//     marginBottom: 0,
//   },
//   headingTextMob: {
//     fontSize: 12,
//     fontWeight: "bold",
//     color: colors.black,
//     marginBottom: 0,
//   },
//   descText: {
//     fontSize: 16,
//     fontWeight: "200",
//     color: colors.black,
//     marginTop: 8,
//   },
//   descTextMob: {
//     fontSize: 13,
//     fontWeight: "100",
//     color: colors.black,
//     marginTop: 8,
//     overflow: "hidden",
//   },
//   bottomDivCont: {
//     height: 20,
//     backgroundColor: colors.white,
//     display: "flex",
//   },
//   bottomDivDateText: {
//     color: colors.black,
//     justifyContent: "flex-start",
//     flex: 0.5,
//     margin: 0,
//     display: "flex",
//     justifyContent: "center",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   bottomDivReadMoreText: {
//     color: colors.purple,
//     justifyContent: "center",
//     display: "flex",
//     flex: 2,
//     fontWeight: "bold",
//     fontSize: 15,
//     margin: 0,
//     cursor: "pointer",
//   },
//   bottomDivDateTextMob: {
//     color: colors.black,
//     justifyContent: "flex-start",
//     flex: 1.5,
//     margin: 0,
//     display: "flex",
//     justifyContent: "center",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   shareIconCont: {
//     color: "black",
//     marginTop: -50,
//     cursor: "pointer",
//   },
//   shareIcon: {
//     color: colors.black,
//     width: 30,
//     height: 30,
//   },
//   shareText: {
//     color: colors.purple,
//     marginTop: -5,
//   },
// };

// @ts-ignore
const useStyles = makeStyles(teamStyle);

function ImmersiveMarketNewsList(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;
  const { darkMode } = props;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({
          ...prevState,
          mobileView: false,
        }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div id="xr-social-media" className={classes.xrSocialMedia}>
      <Grid item xs={12}>
        <h2 data-aos="zoom-in" data-aos-duration="1000" className={classes.mediaTitle}>{strings.XR_SOCIAL_MEDIA}</h2>
      </Grid>
      <Container>
        <Grid container className={classes.mediaRow} data-aos="fade-up" data-aos-duration="1000">
          {strings.XR_SOCIAL_MEDIA_ARTICLES.map((item) => {
            return (
              <>
                <Grid item lg={4} md={4} className={classes.mediaRowWrap}>
                  <div className={classes.mediaRowBox}>
                    <div className={classes.mediaRowBoxInner}>
                      <div className={classes.mediaBoxTop}><img src={item.image} /></div>
                      <div className={classes.mediaBoxBottom}>
                        <div className={classes.mediaBoxDateTitle}>
                          <h4 className={classes.mediaBoxTitle}>{item.heading}</h4>
                          <span className={classes.mediaDate}>{item.date}</span>
                        </div>
                        <p className={classes.mediaText}>{item.description}</p>
                        <div className={classes.mediaReadMore}>
                          <a href="#">{strings.READ_MORE}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
      {/* <div>
        <h1 className={classNames(classes.title)}>{strings.XR_SOCIAL_MEDIA}</h1>
      </div>
      <div>
        {strings.XR_SOCIAL_MEDIA_ARTICLES.map((item) => {
          return (
            <>
              <div style={styles.mainDivCont}>
                <div style={styles.imageAndDescDic}>
                  <img
                    style={
                      mobileView ? styles.imgStyleForMob : styles.imgStyle
                    }
                    src="./images/photo_from_article.png"
                  />
                  <div style={styles.headingAndDescCont}>
                    <p
                      style={
                        mobileView
                          ? styles.headingTextMob
                          : styles.headingText
                      }
                    >
                      {strings.XR_SOCIAL_MEDIA_ARTICLES[0].heading}
                    </p>

                    <p
                      style={
                        mobileView ? styles.descTextMob : styles.descText
                      }
                    >
                      {strings.XR_SOCIAL_MEDIA_ARTICLES[0].description}
                    </p>
                  </div>
                </div>
              </div>

              <div style={styles.bottomDivCont}>
                <p
                  style={
                    mobileView
                      ? styles.bottomDivDateTextMob
                      : styles.bottomDivDateText
                  }
                >
                  {strings.XR_SOCIAL_MEDIA_ARTICLES[0].date}
                </p>
                <p
                  style={styles.bottomDivReadMoreText}
                >{`${strings.READ_MORE}...`}</p>
                <div style={styles.shareIconCont}>
                  <ShareIcon style={styles.shareIcon} />
                  <p style={styles.shareText}>{`${strings.SHARE}...`}</p>
                </div>
              </div>
            </>
          );
        })}
      </div> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.siteState.darkMode,
});

const mapDispatchToProps = {
  setDarkMode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImmersiveMarketNewsList);
