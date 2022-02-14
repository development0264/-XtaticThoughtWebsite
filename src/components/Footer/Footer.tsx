import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Container
} from "@material-ui/core";
import XtaticLabModal from "../Navigation/SiteAppBar/XtaticLabModal";
import Link from "next/link";
const customSelectStyle = (theme) => ({

});

const contactStyle = (theme) => ({
    contactUsingSection: {
        backgroundColor: "#000000",
        display: 'flex',
        border: "1px solid #D8D8D8",
        "& > div + div": {
            borderLeft: "1px solid #D8D8D8",
            '@media (max-width: 991px)': {
                borderLeft: "none",
                marginTop: 30,
            },
        },
        '@media (max-width: 991px)': {
            flexWrap: "wrap",
            border: "none",
            padding: "0 24px",
            backgroundColor: "transparent",
        },
    },
    contactUsingBox: {
        width: "50%",
        flex: "0 0 50%",
        '@media (max-width: 991px)': {
            width: "100%",
            flex: "0 0 100%",
            border: "1px solid #D8D8D8 !important",
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
            width: 20,
        }
    },
    footerContainer: {
        maxWidth: "100%"
    },
    footerSection: {
        paddingTop: "100px",
        paddingBottom: "100px",
        position: "relative",
        zIndex: "11",
    },

    footerContainerLeft: {

    },
    footerLogo: {
        marginBottom: "50px",
        '@media (max-width: 991px)': {
            marginBottom: "20px",
        },
        '& img': {
            '@media (max-width: 991px)': {
                width: "270px",
            },
        }
    },
    footerMenu: {
        display: "grid",
        "& ul": {
            margin: "0",
            padding: "0",
            listStyle: "none",
        },
        "& a": {
            fontSize: "18px",
            color: "#F1F1F1",
            fontFamily: "Montserrat",
            textDecoration: "none",
            display: "inline-block",
            '&:hover': {
                background: "-webkit-linear-gradient(45deg,  #00FFFF, #40FF00)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
            },
        },
        "& li + li": {
            marginTop: "40px",
            '@media (max-width: 991px)': {
                marginTop: "10px",
            },
        },
    },
    footerContainerRight: {
        "& h4": {
            margin: "0 0 44px 0",
            fontSize: "35px",
            lineHeight: "43px",
            fontFamily: "Montserrat",
            fontWeight: "normal",
            color: "#FFFFFF",
            '@media (max-width: 991px)': {
                margin: "20px 0 20px 0",
                lineHeight: "normal",
                fontSize: 24,
            },
        },
        "& h6": {
            margin: "0",
            fontWeight: "normal",
            fontSize: "18px",
            color: "#F1F1F1",
            fontFamily: "Montserrat",
        },
    },
    footerSocial: {
        marginTop: "10px",
        "& ul": {
            padding: "0",
            margin: "0",
            listStyle: "none",
            display: "flex",
            alignItems: "center",
        },
        "& li + li": {
            marginLeft: "25px",
        },
    },
    footerContact: {
        marginBottom: "20px",
        "& ul": {
            margin: "0",
            padding: "0",
            listStyle: "none",
        },
        "& li": {
            display: "flex",
            alignItems: "center",
            '@media (max-width: 575px)': {
                flexWrap: "wrap",
            },
        },
        "& li + li": {
            marginTop: "10px",
        },
        "& a": {
            color: "#40FF00",
            fontWeight: "normal",
            fontSize: "18px",
            fontFamily: "Montserrat",
            textDecoration: "none",
        },
        "& h6": {
            margin: "0",
            fontWeight: "normal",
            fontSize: "18px",
            fontFamily: "Montserrat",
            color: "#F1F1F1",
            minWidth: "130px",
            '@media (max-width: 575px)': {
                width: "100%",
            },
        },
    }
});

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
    const [isXtaticLabsModalOpen, setXtaticLabsModalVisibility] = React.useState(false);
    const [state, setState] = React.useState({
        mobileView: false,
        drawerOpen: false,
    });
    const handleModalVisibility = (visibilityStatus) => {
        setXtaticLabsModalVisibility(visibilityStatus);
    };

    const classes = useStyles();
    return (
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className={classes.contactUsingSection}>
                <div className={classes.contactUsingBox} >
                    <div className={classes.contactUsingBoxInner}>
                        {/* <div className={classes.contactUsingBoxInner} data-aos="fade-right" data-aos-duration="1000"> */}
                        <div className="animatedShapeLeft"><img src="./images/contactusing-left.png" className={classes.animatedShapeLeftImg}></img></div>
                        <div className="animatedShapeRight"><img src="./images/contactusing-right.png" className={classes.animatedShapeRightImg}></img></div>
                        <h4>Email Us</h4>
                        <img className="animatedShapeBg" src="./images/contactusing-bg.png"></img>
                        <a href="#" className={classes.redirectLink}><img src="./images/right-down.png"></img></a>
                    </div>
                </div>
                <div className={classes.contactUsingBox}>
                    <div className={classes.contactUsingBoxInner}>
                        {/* <div className={classes.contactUsingBoxInner} data-aos="fade-left" data-aos-duration="1000"> */}
                        <div className="animatedShapeLeft"><img src="./images/contactusing-left.png" className={classes.animatedShapeLeftImg}></img></div>
                        <div className="animatedShapeRight"><img src="./images/contactusing-right.png" className={classes.animatedShapeRightImg}></img></div>
                        <h4>Message Us in Facebook</h4>
                        <img className="animatedShapeBg" src="./images/contactusing-bg.png"></img>
                        <a href="#" className={classes.redirectLink}><img src="./images/right-down.png"></img></a>
                    </div>
                </div>
            </div>
            <footer className={classes.footerSection}>
                <Container className={classes.footerContainer}>
                    <div>
                        <Grid spacing={2} container>
                            <Grid item md={6} xs={12}>
                                <div className={classes.footerContainerLeft}>
                                    {/* <div className={classes.footerContainerLeft} data-aos="fade-right" data-aos-duration="1000"> */}
                                    <div className={classes.footerLogo}>
                                        <Link href="/"><img src="./images/footer-logo.png"></img></Link>
                                    </div>
                                    <div className={classes.footerMenu}>
                                        <ul>
                                            <li>
                                                <Link href="/table">Table</Link>
                                            </li>
                                            <li>
                                                <Link href="/dashboard">Dashboard</Link>
                                            </li>
                                            <li>
                                                <a style={{ margin: 0 }} href="javascript:void(0)" onClick={() => {

                                                    handleModalVisibility(!isXtaticLabsModalOpen);
                                                }}>Xtatic Labs</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <div className={classes.footerContainerRight}>
                                    {/* <div className={classes.footerContainerRight} data-aos="fade-left" data-aos-duration="1000"> */}
                                    <h4>Contacts</h4>
                                    <div className={classes.footerContact}>
                                        <ul>
                                            <li>
                                                <h6>Email us </h6>
                                                <a href="#">info@XtaticThought.com </a>
                                            </li>
                                            <li>
                                                <h6>Call us</h6>
                                                <a href="#">+ 1 123 456 7890</a>
                                            </li>
                                            <li>
                                                <h6>Visit us</h6>
                                                <a href="#">Address</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h6>Follow us on social media</h6>
                                    <div className={classes.footerSocial}>
                                        <ul>
                                            <li>
                                                <a href="#"><img src="./images/facebook-icon.png"></img></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="./images/instagram-icon.png"></img></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="./images/twitter-icon.png"></img></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="./images/linkedin-icon.png"></img></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src="./images/youtube-icon.png"></img></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </footer>
            {isXtaticLabsModalOpen && (
                <XtaticLabModal
                    isModalOpen={isXtaticLabsModalOpen}
                    setModalVisibility={handleModalVisibility}
                />
            )}
        </div>
    );
}
