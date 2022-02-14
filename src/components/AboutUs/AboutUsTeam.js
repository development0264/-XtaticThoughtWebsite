import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {
    Grid,
    Container
} from "@material-ui/core";
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
import { connect } from "react-redux";
import { setDarkMode } from "../../components/SiteState/state/actions";
import {
    mrAuto,
    mlAuto,
    title,
    description,
    cardTitle,
} from "@material-kit-pro-react/assets/jss/material-kit-pro-react.js";

const fontFamily = `"Roboto", "Times New Roman", serif`;
const teamStyle = (theme) => ({
    aboutContainer: {
        paddingBottom: "90px",
        maxWidth: "100%",
        '@media (max-width: 991px)': {
            paddingBottom: "0",
        },
    },
    cardBox: {
        margin: "0",
        border: "1px solid #D8D8D8",
        borderRadius: "0",
        position: "relative",
        background: "#000000",
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
            top: "0",
            zIndex: "1",
            transition: "all 0.6s ease 0s",
            width: "0",
            overflow: "hidden",
        },
        "& .animatedShapeRight": {
            position: "absolute",
            right: "0",
            bottom: "0",
            zIndex: "1",
            transition: "all 0.6s ease 0s",
            width: "0",
            overflow: "hidden",
            textAlign: "right",
            lineHeight: "0",
            height: "100%",
        },
        "&:hover .animatedShapeLeft": {
            width: "140px",
        },
        "&:hover .animatedShapeRight": {
            width: "83px",
        },
    },
    animatedShapeLeftImg: {

    },
    animatedShapeRightImg: {
        position: "absolute",
        right: 0,
        bottom: 10,
    },
    cardAvatarBox: {
        position: "relative",
        zIndex: 9,
    },
    cardAvatarImage: {
        width: "100px",
        height: "100px",
        margin: "-50px auto 0",
    },
    cardBody: {
        padding: "30px 20px 40px",
        position: "relative",
        zIndex: 9,
        '@media (max-width: 1199px)': {
            padding: "20px 10px 20px 10px",
        },
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    aboutRow: {
        margin: "0 -24px",
        width: "auto",
        '@media (max-width: 1199px)': {
            margin: "0 -15px",
        },
    },
    aboutRowBox: {
        padding: "0 35px",
        marginBottom: "170px",
        '@media (max-width: 1199px)': {
            padding: "0 15px",
            marginBottom: "80px",
        },
        '@media (max-width: 991px)': {
            maxWidth: "50%",
            flexBasis: "50%",
        },
        '@media (max-width: 575px)': {
            maxWidth: "100%",
            flexBasis: "100%",
        },
    },
    cardTitle: {
        fontSize: "35px",
        lineHeight: "41px",
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight: "normal",
        margin: "0",
        fontFamily: "Raleway",
        '@media (max-width: 1199px)': {
            fontSize: "26px",
        },
        '@media (max-width: 575px)': {
            fontSize: "22px",
            lineHeight: "normal",
        },
    },
    textMuted: {
        color: "#F1F1F1",
        margin: "6px 0 0 0",
        textAlign: "center",
        fontFamily: "Raleway",
        fontWeight: "normal",
        fontSize: "20px",
        '@media (max-width: 1199px)': {
            fontSize: "16px",
        },
    },
    teamTitle: {
        marginBottom: "200px",
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
            marginBottom: "90px",
            fontSize: "40px",
        },
        '@media (max-width: 767px)': {
            marginTop: "60px",
            marginBottom: "80px",
            fontSize: "30px",
        },
        '@media (max-width: 575px)': {
            fontSize: "26px",
        },
    },
    xtaticContainer: {
        maxWidth: "100%",
        padding: "0 0 0 0",
    },
    xtaticRow: {
        alignItems: "center",
        '& > div': {
            '@media (max-width: 767px)': {
                maxWidth: "100%",
                Width: "100%",
                flexBasis: "100%",
            },
        },
        '@media (max-width: 767px)': {
            padding: "0 24px"
        },
    },
    xtaticDetailBox: {
        padding: "0 30px 0 105px",
        '@media (max-width: 1199px)': {
            padding: "0 30px",
        },
        '@media (max-width: 767px)': {
            padding: "0 0",
        },
        "& p": {
            fontSize: "25px",
            color: "#F1F1F1",
            fontFamily: "Montserrat",
            fontWeight: "normal",
            margin: 0,
            '@media (max-width: 1199px)': {
                fontSize: "20px",
            },
            '@media (max-width: 767px)': {
                fontSize: "16px",
            },
        },
        "& p + p": {
            marginTop: 31,
            '@media (max-width: 1199px)': {
                marginTop: "20px",
            },
        },
        "& a": {
            color: "#34FF32",
            textDecoration: "none",
        },
    },
    contactUsingBox: {
        width: "100%",
        flex: "0 0 100%",
        border: "1px solid #D8D8D8",
        '@media (max-width: 767px)': {
            marginBottom: "30px",
        },
    },
    contactUsingBoxInner: {
        position: "relative",
        padding: "57px 50px",
        display: "flex",
        background: "#000",
        alignItems: "center",
        '@media (max-width: 767px)': {
            padding: "37px 20px",
        },

        "& h4": {
            margin: "0 0 0 27px",
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
                lineHeight: "normal",
            },
            '@media (max-width: 575px)': {
                fontSize: "20px",
                marginLeft: "15px",
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
            bottom: "0",
            zIndex: "1",
            transition: "all 0.6s ease 0s",
            width: "0",
            overflow: "hidden",
            lineHeight: 0,
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
            width: "172px",
        },
        "&:hover .animatedShapeRight": {
            width: "208px",
        },
    },
    xtaticanimatedShapeLeftImg: {

    },
    xtaticanimatedShapeRightImg: {
        position: "absolute",
        right: 0,
        top: 0,
    },
    oLogo: {
        position: "relative",
        zIndex: "9",
        '@media (max-width: 1199px)': {
            width: "90px",
        },
    },
    redirectLink: {
        position: "absolute",
        bottom: "31px",
        lineHeight: "0",
        right: "50px",
        zIndex: 1,
        '@media (max-width: 1199px)': {
            bottom: "20px",
            right: "20px",
        },
        '& img': {
            '@media (max-width: 1199px)': {
                width: 20,
            },
        }
    },
    labsTitle: {
        marginBottom: "150px",
        fontFamily: "Audiowide",
        fontSize: "50px",
        lineHeight: "64px",
        textAlign: "center",
        fontWeight: "normal",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        marginTop: "260px",
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
    }
});

// @ts-ignore
const useStyles = makeStyles(teamStyle);

const teamData = [
    {
        name: "Pickles, PhD",
        title: "ML/AI Engineer",
        image: "./images/team-1.png",
    },
    {
        name: "Leona Shimoru",
        title: "Founder & CEO",
        image: "./images/team-2.png",
    },
    {
        name: "Jason Cuadradro",
        title: "Media Consultant",
        image: "./images/team-3.png",
    },
    {
        name: "Mustang, PhD",
        title: "Chief Academic Strategist",
        image: "./images/team-4.png",
    },
    {
        name: "Richie Gee",
        title: "Co-Founder & CTO",
        image:
            "./images/team-5.png",
    },
    {
        name: "April Mak",
        title: "Office Coordinator & Event Organizer",
        image:
            "./images/team-6.png",
    },
];

const gridItemSize = 3;

function SectionTeam(props) {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.xtaticContainer}>
                <Grid item xs={12}>
                    <h2 className={classes.labsTitle} data-aos="zoom-in" data-aos-duration="1000">Xtatic Labs</h2>
                </Grid>
                <Grid container className={classes.xtaticRow}>
                    <Grid item xs={6} data-aos="fade-right" data-aos-duration="1000">
                        <div className={classes.contactUsingBox}>
                            <div className={classes.contactUsingBoxInner}>
                                <div className="animatedShapeLeft"><img src="./images/labs-animated-line-left.png" className={classes.xtaticanimatedShapeLeftImg}></img></div>
                                <div className="animatedShapeRight"><img src="./images/labs-animated-line-right.png" className={classes.xtaticanimatedShapeRightImg}></img></div>
                                <img className={classes.oLogo} src="./images/o-logo.png"></img><h4>Available for<br></br>Oculus Quest</h4>
                                <img className="animatedShapeBg" src="./images/contactusing-bg.png"></img>
                                <a href="#" className={classes.redirectLink}><img src="./images/right-down.png"></img></a>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} data-aos="fade-left" data-aos-duration="1000">
                        <div className={classes.xtaticDetailBox}>
                            <p>Download and try it out on your <a href="#">Oculus Quest</a> and give us your feedback!</p>
                            <p>Participants are joined in our merchandise giveaway and a raffle for prizes.</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.aboutContainer}>
                <Grid item xs={12}>
                    <h2 className={classes.teamTitle} data-aos="zoom-in" data-aos-duration="1000">Meet the Team</h2>
                </Grid>
                <Grid container className={classes.aboutRow}>
                    {teamData.map((teamMember) => (
                        <Grid data-aos="fade-up" data-aos-duration="1000" item xs={4} className={classes.aboutRowBox}>
                            <Card plain className={classes.cardBox}>
                                <CardAvatar plain className={classes.cardAvatarBox}>
                                    <div className={classes.cardAvatarImage}>
                                        <img
                                            src={teamMember.image}
                                            alt="profile-pic"
                                            className={classes.img}
                                        />
                                    </div>
                                </CardAvatar>
                                <CardBody plain className={classes.cardBody}>
                                    <h3 className={classes.cardTitle}>{teamMember.name}</h3>
                                    <h5 className={classes.textMuted}>{teamMember.title}</h5>
                                </CardBody>
                                <img className="animatedShapeBg" src="./images/contactusing-bg.png"></img>
                                <div className="animatedShapeLeft"><img src="./images/about-animated-line-left.png" className={classes.animatedShapeLeftImg}></img></div>
                                <div className="animatedShapeRight"><img src="./images/about-animated-line-right.png" className={classes.animatedShapeRightImg}></img></div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* <div
                className={
                    props.darkMode ? classes.brainBgWrapper : classes.brainBgWrapperLight
                }
            >
                <GridContainer className={classes.team}>
                    <GridItem
                        md={8}
                        sm={8}
                        className={classNames(
                            classes.mrAuto,
                            classes.mlAuto,
                            classes.textCenter
                        )}
                    >
                        <h1 className={classes.brainTitle}>The Brains</h1>
                        <h3 className={classes.brainDescription}>
                            Whether you are a business, student, or adventurer, we are
                            dedicated to helping you succeed. Upgrade your employment skill
                            sets with a hands-on training platform adjusted to the comfort of
                            the workforce. Edify your goals through exploration and persona
                            building. Seek out journeys near and far, gain insight on the
                            universe you live in.
                        </h3>
                    </GridItem>
                </GridContainer>
            </div>
            <div
                className={
                    props.darkMode ? classes.teamBgWrapper : classes.teamBgWrapperLight
                }
            >
                <GridContainer className={classes.teamInnerWrapper}>
                    {teamData.map((teamMember) => (
                        <GridItem md={gridItemSize} sm={gridItemSize}>
                            <Card profile plain>
                                <CardAvatar profile plain className={classes.cardAvatar}>
                                    <a>
                                        <img
                                            src={teamMember.image}
                                            alt="profile-pic"
                                            className={classes.img}
                                        />
                                    </a>
                                </CardAvatar>
                                <CardBody plain>
                                    <h3 className={classes.cardTitle}>{teamMember.name}</h3>
                                    <h5 className={classes.textMuted}>{teamMember.title}</h5>
                                    <p className={classes.cardDescription}>
                                        {teamMember.pfDescription}
                                    </p>
                                </CardBody>
                                <CardFooter className={classes.justifyContent}>
                                    <Button href="#pablo" justIcon simple color="twitter">
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button href="#pablo" justIcon simple color="facebook">
                                        <i className="fab fa-facebook" />
                                    </Button>
                                    <Button href="#pablo" justIcon simple color="google">
                                        <i className="fab fa-google" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    ))}
                </GridContainer>
            </div> */}
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
