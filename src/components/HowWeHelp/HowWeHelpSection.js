import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// core components
import GridContainer from "@material-kit-pro-react/components/Grid/GridContainer.js";
import GridItem from "@material-kit-pro-react/components/Grid/GridItem.js";
import Card from "@material-kit-pro-react/components/Card/Card.js";
import CardAvatar from "@material-kit-pro-react/components/Card/CardAvatar.js";
import CardBody from "@material-kit-pro-react/components/Card/CardBody.js";
import CardFooter from "@material-kit-pro-react/components/Card/CardFooter.js";
import Button from "@material-kit-pro-react/components/CustomButtons/Button.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import {
  mrAuto,
  mlAuto,
  title,
  description,
  cardTitle,
} from "@material-kit-pro-react/assets/jss/material-kit-pro-react.js";
import {
  Grid,
  Container
} from "@material-ui/core";
import { strings } from "../../constants";
import { connect } from "react-redux";
import { setDarkMode } from "../../components/SiteState/state/actions";

import ContactUsModal from "../Navigation/SiteAppBar/ContactUs/ContactUsModal";
const fontFamily = `"Roboto", "Times New Roman", serif`;
const teamStyle = (theme) => ({
  // mrAuto,
  // mlAuto,
  // title: {
  //   ...title,
  //   fontFamily: fontFamily,
  //   color: theme.palette.text.primary,
  //   textAlign: "center!important",
  //   color: "#3d7b35",
  //   fontSize: "18pt",
  //   fontWeight: "normal",
  // },
  // description: {
  //   ...description,
  //   fontFamily: fontFamily,
  //   lineHeight: 0.7,
  //   color: theme.palette.text.primary,
  //   fontWeight: "normal",
  //   fontSize: "11pt",
  //   [theme.breakpoints.down("sm")]: {
  //     lineHeight: 1.4,
  //   },
  // },
  // artHeading: {
  //   fontFamily: fontFamily,
  //   color: theme.palette.text.primary,
  //   textAlign: "center!important",
  //   textTransform: "uppercase",
  //   fontSize: "24pt",
  //   fontWeight: 500,
  //   background: `url("./images/service_title_lines.png") no-repeat`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: 75,
  //   marginBottom: 0,
  // },
  // textCenter: {
  //   textAlign: "center!important",
  // },
  // cardOptionTitle: {
  //   textAlign: "left",
  //   color: "#ffffff",
  //   textTransform: "uppercase",
  //   fontSize: "14pt",
  //   fontWeight: "normal",
  // },
  // cardItemWrapper: {
  //   background: `url("./images/help_options_card.png") no-repeat`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   border: "1px solid #3d7b35",
  //   height: "auto",
  //   width: "100%",
  //   height: "300px",
  //   display: "block",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   cursor: "pointer",
  // },
  // cardItemInnerWrapper: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // descriptionTextStyle: {
  //   cursor: "pointer",
  //   color: "white",
  // },
  // selectedCardItemLight: {
  //   border: "3px solid #3d7b35",
  // },
  // cardTitle: {
  //   ...cardTitle,
  //   fontFamily: fontFamily,
  //   ["&, & a"]: {
  //     ...cardTitle["&, & a"],
  //     color: theme.palette.text.primary,
  //   },
  // },
  // servicesCardItemWrapper: {
  //   background: `url("./images/card.png") no-repeat`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   border: "1px solid transparent",
  //   height: "auto",
  //   width: "100%",
  //   height: "380px",
  //   display: "block",
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   display: "flex",
  //   justifyContent: "center",
  //   marginTop: 0,
  // },
  // servicesCardItemInnerWrapper: {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   padding: "20px 40px",
  //   [theme.breakpoints.down("sm")]: {
  //     padding: "20px 10px",
  //   },
  // },
  // artServiceTitle: {
  //   color: "#ffffff",
  //   fontSize: "14pt",
  //   textTransform: "uppercase",
  //   alignSelf: "flex-start",
  // },
  // artServiceDescription: {
  //   cursor: "pointer",
  //   color: "#ffffff",
  //   fontSize: "11pt",
  //   alignSelf: "flex-end",
  //   fontWeight: "normal",
  //   maxWidth: "70%",
  //   [theme.breakpoints.down("sm")]: {
  //     maxWidth: "100%",
  //   },
  // },





  servicesContainer: {
    maxWidth: "100%",
    paddingRight: 0,
    '@media (max-width: 916px)': {
      paddingRight: 24,
    },
  },
  servicesTitle: {
    marginBottom: "150px",
    fontFamily: "Audiowide",
    fontSize: "50px",
    lineHeight: "64px",
    textAlign: "center",
    fontWeight: "normal",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    marginTop: "250px",
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
  servicesRowDesktop: {
    alignItems: "center",
    justifyContent: "space-between",
    '@media (max-width: 916px)': {
      display: "none"
    },
  },
  servicesRowMobile: {
    display: "none",
    '@media (max-width: 916px)': {
      display: "block"
    },
    '& > div': {
      '@media (max-width: 916px)': {
        width: "100%",
      },
    },
  },
  servicesOptions: {
    marginTop: "-127px",
    paddingRight: 20,
    '@media (max-width: 991px)': {
      marginTop: "-87px",
    },
    '@media (max-width: 916px)': {
      marginTop: "0",
      width: "100%",
    },
    "& ul": {
      margin: "0",
      padding: "0",
      listStyle: "none",
    },
    "& h4": {
      margin: "0",
      fontSize: "30px",
      fontFamily: "Raleway",
      lineHeight: "35px",
      textTransform: "uppercase",
      fontWeight: "300",
      cursor: "pointer",
      '&:hover': {
        background: "-webkit-linear-gradient(230deg,  #40FF00, #00FFFF)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        fontWeight: "500",
      },
      '@media (max-width: 1360px)': {
        fontSize: "20px",
      },
      '@media (max-width: 991px)': {
        fontSize: "18px",
      },
      '@media (max-width: 916px)': {
        marginBottom: "15px",
      },
      "& img": {
        marginLeft: "10px",
        display: "none",
        '@media (max-width: 1360px)': {
          width: "15px",
        },
      },
    },
    "& li + li": {
      marginTop: "40px",
      '@media (max-width: 1360px)': {
        marginTop: "20px",
      },
      '@media (max-width: 575px)': {
        marginTop: "10px",
      },
    },
  },
  selectedCardItem: {
    "& h4": {
      background: "-webkit-linear-gradient(230deg,  #40FF00, #00FFFF)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      fontWeight: "500",
      "& img": {
        display: "inline-block",
      },
    },
  },
  servicesDetailSection: {
    minHeight: "586px",
    borderLeft: "1px solid #D8D8D8",
    borderTop: "1px solid #D8D8D8",
    borderBottom: "1px solid #D8D8D8",
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "70px",
    overflow: "hidden",
    background: "#000000",
    '@media (max-width: 991px)': {
      minHeight: "auto",
      marginBottom: 30,
    },
    '@media (max-width: 1199px)': {
      borderRight: "1px solid #D8D8D8",
    },
    "& .serviceBg": {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      height: "100%",
      objectFit: "cover",
      transition: "all 0.3s ease 0s",
    },
  },

  servicesDetailSectionInner: {
    padding: "0 120px",
    position: "relative",
    zIndex: 9,
    '@media (max-width: 1199px)': {
      padding: "40px 40px",
    },
    '@media (max-width: 575px)': {
      padding: "20px",
    },
  },
  servicesDetailBox: {
    maxWidth: "508px",
    width: "100%",
  },
  servicesDetailImage: {
    lineHeight: 0,
    display: "inline-block",
    position: "relative",
    "& > img": {
      opacity: 0,
      // '@media (max-width: 991px)': {
      //   width: "90px",
      // },
    },
  },
  servicesDetailTitle: {
    fontSize: "30px",
    textTransform: "uppercase",
    lineHeight: "35px",
    fontWeight: "normal",
    margin: "50px 0 30px 0",
    fontFamily: "Raleway",
    '@media (max-width: 991px)': {
      margin: "20px 0 10px 0",
      fontSize: "23px",
    },
    '@media (max-width: 575px)': {
      fontSize: "20px",
    },
  },
  servicesDetailText: {
    margin: "0",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "30px",
    fontFamily: "Montserrat",
    '@media (max-width: 991px)': {
      fontSize: "16px",
    },
  },
  contactUsButton: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "22px",
    lineHeight: "37px",
    padding: "10px 52px",
    background: "linear-gradient(269.88deg, #40FF00 1.68%, #16FFA8 86.92%, #00FFFF 112.83%)",
    boxShadow: "0px 10px 50px rgba(64, 255, 0, 0.3)",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      background: "linear-gradient(-269.88deg, #40FF00 1.68%, #16FFA8 86.92%, #00FFFF 112.83%)",
    },
    '@media (max-width: 991px)': {
      padding: "13px 42px",
      fontSize: "18px",
      lineHeight: "normal",
    },
  },
});
const DivButton = styled.div`
.servicesDetailImage-animation-one {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.servicesDetailImage-animation-two {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.servicesDetailImage-animation-three {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.servicesDetailImage-animation-four {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.servicesDetailImage-animation-five {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.servicesDetailImage-animation-six {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.one-part-one {
  position: absolute;
  left: 0;
  top: 0;
  animation: myfirst 8s infinite;
}
.one-part-two {
  position: absolute;
  right: 0;
  top: 0;
  animation: mysecond 8s infinite;
}
.one-part-three {
  position: absolute;
  right: 0;
  bottom: 0;
  animation: mythird 8s infinite;
}
.one-part-four {
  position: absolute;
  bottom: 0;
  left: 0;
  animation: myfourth 8s infinite;
}
@keyframes myfirst {
  0%   {top: -30px;opacity:0}
  10%  {top: 0;opacity:1}
  20%  {top: 0;opacity:1}
  30%  {top: 0;opacity:1}
  40%  {top: 0;opacity:1}
  50%  {top: 0;opacity:1}
  60%  {top: 0;opacity:1}
  70%  {top: 0;opacity:1}
  80%  {top: 0;opacity:1}
  90%  {top: -30px;opacity:0}
  100% {top: -30px;opacity:0}
}
@keyframes mysecond {
  0%   {right: -30px;opacity:0}
  10%  {right: -30px;opacity:0}
  20%  {right: 0;opacity:1}
  30%  {right: 0;opacity:1}
  40%  {right: 0;opacity:1}
  50%  {right: 0;opacity:1}
  60%  {right: 0;opacity:1}
  70%  {right: 0;opacity:1}
  80%  {right: -30px;opacity:0}
  90%  {right: -30px;opacity:0}
  100% {right: -30px;opacity:0}
}
@keyframes mythird {
  0%   {bottom: -30px;opacity:0}
  10%  {bottom: -30px;opacity:0}
  20%  {bottom: -30px;opacity:0}
  30%  {bottom: 0;opacity:1}
  40%  {bottom: 0;opacity:1}
  50%  {bottom: 0;opacity:1}
  60%  {bottom: 0;opacity:1}
  70%  {bottom: -30px;opacity:0}
  80%  {bottom: -30px;opacity:0}
  90%  {bottom: -30px;opacity:0}
  100% {bottom: -30px;opacity:0}
}
@keyframes myfourth {
  0%   {left: -30px;opacity:0}
  10%  {left: -30px;opacity:0}
  20%  {left: -30px;opacity:0}
  30%  {left: -30px;opacity:0}
  40%  {left: 0;opacity:1}
  50%  {left: 0;opacity:1}
  60%  {left: -30px;opacity:0}
  70%  {left: -30px;opacity:0}
  80%  {left: -30px;opacity:0}
  90%  {left: -30px;opacity:0}
  100% {left: -30px;opacity:0}
}
.two-part-one {
  position: absolute;
  left: 0;
  top: 0;
  animation: myfirst 4s infinite;
}
.two-part-two {
  position: absolute;
  right: 0;
  bottom: 0;
  animation: mythird 4s infinite;
}
.three-part-one {
  position: absolute;
  left: 0;
  bottom: 0;
  animation: myfive 6s infinite;
}
.three-part-two {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  animation: mysix 6s infinite;
}
.three-part-three {
  position: absolute;
  right: 0;
  bottom: 0;
  animation: myseven 6s infinite;
}
@keyframes myfive {
  0%   {bottom: 30px;opacity:0}
  10%  {bottom: 0;opacity:1}
  20%  {bottom: 0;opacity:1}
  30%  {bottom: 0;opacity:1}
  40%  {bottom: 0;opacity:1}
  50%  {bottom: 0;opacity:1}
  60%  {bottom: 0;opacity:1}
  70%  {bottom: 0;opacity:1}
  80%  {bottom: 0;opacity:1}
  90%  {bottom: 30px;opacity:0}
  100% {bottom: 30px;opacity:0}
}
@keyframes mysix {
  0%   {bottom: 30px;opacity:0}
  10%  {bottom: 30px;opacity:0}
  20%  {bottom: 0;opacity:1}
  30%  {bottom: 0;opacity:1}
  40%  {bottom: 0;opacity:1}
  50%  {bottom: 0;opacity:1}
  60%  {bottom: 0;opacity:1}
  70%  {bottom: 0;opacity:1}
  80%  {bottom: 30px;opacity:0}
  90%  {bottom: 30px;opacity:0}
  100% {bottom: 30px;opacity:0}
}
@keyframes myseven {
  0%   {bottom: 30px;opacity:0}
  10%  {bottom: 30px;opacity:0}
  20%  {bottom: 30px;opacity:0}
  30%  {bottom: 0;opacity:1}
  40%  {bottom: 0;opacity:1}
  50%  {bottom: 0;opacity:1}
  60%  {bottom: 0;opacity:1}
  70%  {bottom: 30px;opacity:0}
  100% {bottom: 30px;opacity:0}
  90%  {bottom: 30px;opacity:0}
  100% {bottom: 30px;opacity:0}
}
.four-part-one {
  position: absolute;
  left: 0;
  bottom: 0;
  animation: myeight 4s infinite;
}
.four-part-two {
  position: absolute;
  right: 0;
  bottom: 0;
  animation: mynine 4s infinite;
}
@keyframes myeight {
  0%   {left: -30px;opacity:0}
  10%  {left: 0;opacity:1}
  20%  {left: 0;opacity:1}
  30%  {left: 0;opacity:1}
  40%  {left: 0;opacity:1}
  50%  {left: 0;opacity:1}
  60%  {left: 0;opacity:1}
  70%  {left: 0;opacity:1}
  80%  {left: 0;opacity:1}
  90%  {left: -30px;opacity:0}
  100% {left: -30px;opacity:0}
}
@keyframes mynine {
  0%   {right: -30px;opacity:0}
  10%  {right: -30px;opacity:0}
  20%  {right: -30px;opacity:0}
  30%  {right: 0;opacity:1}
  40%  {right: 0;opacity:1}
  50%  {right: 0;opacity:1}
  60%  {right: 0;opacity:1}
  70%  {right: -30px;opacity:0}
  80%  {right: -30px;opacity:0}
  90%  {right: -30px;opacity:0}
  100% {right: -30px;opacity:0}
}
.six-part-one {
  position: absolute;
  left: 0;
  top: 0;
  animation: myfirst 4s infinite;
}
.six-part-two {
  position: absolute;
  left: 0;
  bottom: 0;
  animation: mythird 4s infinite;
}
.five-part-one {
  position: absolute;
  left: 0;
  top: 0;
  animation: myten 4s linear infinite;
}
@keyframes myten {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
// @ts-ignore
const useStyles = makeStyles(teamStyle);
const gridItemSize = 3;
const grid_selectedItemDetailSize = 6;

function HowWeHelp(props) {
  const classes = useStyles();

  const [selectedService, setSelectedService] = useState(
    props.selectedServiceItem
  );

  const [isContactUsModalOpen, setContactUsModalVisibility] = useState(false);

  useEffect(() => {
    // Update the selected item
    setSelectedService(props.selectedServiceItem);
  });

  return (
    <DivButton>
      <Container className={classes.servicesContainer}>
        <Grid item xs={12}>
          <h2 className={classes.servicesTitle} data-aos="zoom-in" data-aos-duration="1000">Our services</h2>
        </Grid>
        <Grid container className={classes.servicesRowMobile}>
          <Grid item lg={12} md={12} data-aos="fade-up" data-aos-duration="1000">
            {strings.HOW_WE_HELP_OPTIONS_MOBILE.map((item) => (
              <>
                <div className={classes.servicesOptions}>
                  <h4>{item.name}</h4>
                </div>
                <div className={classes.servicesDetailSection}>
                  <div className={classes.servicesDetailSectionInner}>
                    <div className={classes.servicesDetailBox}>
                      <div className={classes.servicesDetailImage}>
                        <img src={item.image}></img>
                        <div dangerouslySetInnerHTML={{ __html: item.imagehtml }} />
                      </div>
                      <h4 className={classes.servicesDetailTitle}>{item.heading}</h4>
                      <p className={classes.servicesDetailText}>{item.description}</p>
                    </div>
                  </div>
                  <img className="serviceBg" src="./images/service-bg.png"></img>
                </div>
              </>
            ))}
          </Grid>
          <Grid item lg={12} md={12} data-aos="fade-up" data-aos-duration="1000">
            <button data-aos="zoom-in" data-aos-duration="1000" className={classes.contactUsButton} onClick={() => {
              setContactUsModalVisibility(true);
            }}>Contact Us</button>
            {isContactUsModalOpen && (
              <ContactUsModal
                isModalOpen={isContactUsModalOpen}
                setModalVisibility={setContactUsModalVisibility}
              />
            )}
          </Grid>
        </Grid>
        <Grid container className={classes.servicesRowDesktop}>
          <Grid item lg={4} md={4} data-aos="fade-right" data-aos-duration="1000">
            <div className={classes.servicesOptions}>
              <ul>
                {strings.HOW_WE_HELP_OPTIONS.map((item) => (
                  <li className={classNames(
                    item.slug === selectedService.slug &&
                    classNames(
                      props.darkMode
                        ? classes.selectedCardItem
                        : classes.selectedCardItemLight
                    )
                  )}
                    onClick={() => {
                      setSelectedService(item);
                      props.setSelectedServiceItem(item);
                    }}>
                    <h4>{item.name} <img src="./images/right-icon.png"></img></h4>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item lg={8} md={8} data-aos="fade-left" data-aos-duration="1000">
            <div className={classes.servicesDetailSection}>
              <div className={classes.servicesDetailSectionInner}>
                {strings.HOW_WE_HELP_ITEM_DETAILS[selectedService.slug].map((item) => (
                  <div className={classes.servicesDetailBox}>
                    <div className={classes.servicesDetailImage}>
                      <img src={item.image}></img>
                      <div dangerouslySetInnerHTML={{ __html: item.imagehtml }} />
                    </div>
                    <h4 className={classes.servicesDetailTitle}>{item.heading}</h4>
                    <p className={classes.servicesDetailText}>{item.description}</p>
                  </div>
                ))}
              </div>
              <img className="serviceBg" src="./images/service-bg.png"></img>
            </div>
            <button data-aos="zoom-in" data-aos-duration="1000" className={classes.contactUsButton} onClick={() => {
              setContactUsModalVisibility(true);
            }}>Contact Us</button>
            {isContactUsModalOpen && (
              <ContactUsModal
                isModalOpen={isContactUsModalOpen}
                setModalVisibility={setContactUsModalVisibility}
              />
            )}
          </Grid>
        </Grid>
      </Container>
      {/* <div>
        <div className={classNames(classes.textCenter)}>
          <h1 className={classNames(classes.title)}>{strings.HOW_WE_HELP}</h1>
          {strings.HOW_WE_HELP_DESCRIPTION.map((item) => {
            return <h3 className={classNames(classes.description)}>{item}</h3>;
          })}
        </div>
        <GridContainer style={{ margin: 0 }}>
          {strings.HOW_WE_HELP_OPTIONS.map((item) => (
            <GridItem
              md={gridItemSize}
              sm={gridItemSize}
              sm={8}
              className={classNames(classes.mrAuto, classes.mlAuto)}
            >
              <Card
                profile
                plain
                className={classNames(
                  classes.cardItemWrapper,
                  classes.cursorPointer,
                  item.slug === selectedService.slug &&
                  classNames(
                    props.darkMode
                      ? classes.selectedCardItem
                      : classes.selectedCardItemLight
                  )
                )}
                onClick={() => {
                  setSelectedService(item);
                  props.setSelectedServiceItem(item);
                }}
              >
                <CardBody plain className={classes.cardItemInnerWrapper}>
                  <h3 className={classes.cardOptionTitle}>{item.name}</h3>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </GridContainer>

        <h1 id="how-we-help" className={classNames(classes.artHeading)}>
          {selectedService.name}
        </h1>
        <GridContainer style={{ margin: 0 }}>
          {strings.HOW_WE_HELP_ITEM_DETAILS[selectedService.slug].map((item) => (
            <GridItem
              md={grid_selectedItemDetailSize}
              sm={grid_selectedItemDetailSize}
              className={classNames(classes.mrAuto, classes.mlAuto)}
            >
              <Card
                style={{ padding: 20 }}
                className={classNames(classes.servicesCardItemWrapper)}
              >
                <CardBody
                  plain
                  className={classNames(classes.servicesCardItemInnerWrapper)}
                >
                  <h3 className={classes.artServiceTitle}>{item.heading}</h3>
                  <h4
                    onClick={() => {
                      setContactUsModalVisibility(true);
                    }}
                    className={classes.artServiceDescription}
                  >
                    {item.description}
                  </h4>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
        {isContactUsModalOpen && (
          <ContactUsModal
            isModalOpen={isContactUsModalOpen}
            setModalVisibility={setContactUsModalVisibility}
          />
        )}
      </div> */}
    </DivButton>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.siteState.darkMode,
});

const mapDispatchToProps = {
  setDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(HowWeHelp);
