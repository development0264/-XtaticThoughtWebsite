// working one
import React, { useState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography,
    Grid,
    Drawer,
} from "@material-ui/core";

import NextLinkNoStyle from "../../../blocks/NextLinkNoStyle";
import { HideOnScroll } from "./HideOnScroll";
import LightDarkMode from "../../SiteState/LightDarkMode";
import XtaticLabModal from "./XtaticLabModal";
import { connect } from "react-redux";
import { setDarkMode } from "../../../components/SiteState/state/actions";
import { strings, colors } from "src/constants";
import { darkTheme } from "src/theme";
import { boxShadow } from "@material-kit-pro-react/assets/jss/material-kit-pro-react";
interface SiteAppBarProps {
    drawerWidth: number;
    open: boolean;
    handleDrawerOpen: any;
    setSelectedServiceItem: any;
    darkMode: boolean;

    // for HideOnScroll
    window?: () => Window;
    children?: React.ReactElement;
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "transparent",
        paddingTop: 42,
        paddingBottom: 42,
        position: "absolute",
        boxShadow: "none !important",
        '@media (max-width: 899px)': {
            paddingTop: 10,
            paddingBottom: 10,
        },
    },
    appBarShift: {
        width: (props: SiteAppBarProps) => `calc(100% - ${props.drawerWidth}px)`,
        marginLeft: (props: SiteAppBarProps) => props.drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        padding: 0,
    },
    hide: {
        display: "none",
    },
    title: {
        flexGrow: 1,
        textDecoration: "none",
        color: "#3d7b35",
        textTransform: "capitalize",
        fontSize: "17pt",
    },
    titleLight: {
        flexGrow: 1,
        textDecoration: "none",
        color: "#ffffff",
        textTransform: "capitalize",
        fontSize: "17pt",
    },
    navbarAnchorTag: {
        color: "#3d7b35",
        textTransform: "capitalize",
        fontSize: "10pt",
    },
    anchorLight: {
        color: "#ffffff",
        textTransform: "capitalize",
        fontSize: "10pt",
    },
    mobileViewDivCont: {
        display: "flex",
        flexDirection: "column",
    },
    textAlignCenter: {
        textAlign: "center",
    },
    headerMenuBox: {
        display: "flex",
        '@media (max-width: 899px)': {
            flexWrap: "wrap",
        },
        '& a': {
            color: "#ffffff",
            textDecoration: "none",
            textTransform: "uppercase",
            marginRight: 15,
            fontFamily: "Montserrat",
            fontSize: 15,
            '&:hover': {
                background: "-webkit-linear-gradient(45deg,  #00FFFF, #40FF00)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
            },
            '@media (max-width: 899px)': {
                width: "100%",
                margin: "0 0 0px 0 !important",
                display: "inline-block",
                padding: "10px 20px",
                color: "#000000",
                fontWeight: "600",
                borderBottom: "1px solid #ddd",
                '&:hover': {
                    background: "transparent",
                    "-webkit-background-clip": "inherit",
                    "-webkit-text-fill-color": "inherit",
                },
            },
        },
    },
    mobileHeaderGrid: {
        '& div:empty': {
            display: "none",
        }
    },
    headerGrid: {
        '@media (max-width: 899px)': {
            margin: 0,
            width: "100%",
        },
        '& > div': {
            '@media (max-width: 899px)': {
                width: "100%",
                maxWidth: "100%",
                flex: "0 0 100%",
                padding: "0 !important",
            },
        },
        '& > div:nth-child(2)': {
            '@media (max-width: 899px)': {
                flex: "100%",
                order: "1",
                width: "100%",
                margin: "0",
                padding: "20px 10px !important",
                maxWidth: "100%",
                background: "white",
                lineHeight: "0",
                borderBottom: "1px solid #ddd",
                '& a': {
                    display: "inline-block",
                    lineHeight: 0,
                }
            },
        },
        '& > div:nth-child(3)': {
            '@media (max-width: 899px)': {
                order: 3,
            },
        },
        '& > div:nth-child(1)': {
            '@media (max-width: 899px)': {
                order: 2,
            },
        },
    },
}));

function Header(props: SiteAppBarProps) {
    const [isXtaticLabsModalOpen, setXtaticLabsModalVisibility] = useState(false);
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    const handleModalVisibility = (visibilityStatus) => {
        setXtaticLabsModalVisibility(visibilityStatus);
    };

    const handleDrawerOpen = () => {
        setState((prevState) => ({ ...prevState, drawerOpen: !drawerOpen }));
    };

    const classes = useStyles(props);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({
                    ...prevState,
                    mobileView: false,
                    drawerOpen: false,
                }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const getMenuButtons = (mobileView = false) => {
        return (
            <>
                <Grid className={classes.headerGrid} container spacing={2} style={{ alignItems: 'center' }}>
                    <Grid item xs={4}>
                        <div className={classes.headerMenuBox}>
                            <Link href="/dashboard">Dashboard</Link>
                            <Link href="/table">Table</Link>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: 'center' }}>
                        <Link href="/"><img src="./images/logo.png" alt="..." /></Link>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ justifyContent: 'flex-end' }} className={classes.headerMenuBox}>
                            <a style={{ margin: 0 }} href="javascript:void(0)" className={classes.headerMenu} onClick={() => {
                                setState((prevState) => ({ ...prevState, drawerOpen: false }));
                                handleModalVisibility(!isXtaticLabsModalOpen);
                            }}>xtatic labs</a>
                        </div>
                    </Grid>
                </Grid>
            </>
        );
    };

    return (
        <HideOnScroll {...props}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: drawerOpen,
                })}
            >
                <Toolbar style={{ justifyContent: 'space-between' }} className={classes.mobileHeaderGrid}>
                    {mobileView && (
                        <>
                            <Link href="/"><a style={{ lineHeight: 0 }}><img src="./images/logo.png" alt="..." /></a></Link>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, drawerOpen)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </>
                    )}
                    {mobileView && (
                        <Drawer
                            {...{
                                anchor: "left",
                                open: drawerOpen,
                                onClose: handleDrawerOpen,
                            }}
                        >
                            <div
                                style={{
                                    background: "#fff",
                                    width: 250,
                                    height: "100%",
                                }}
                            >
                                {getMenuButtons(true)}
                            </div>
                        </Drawer>
                    )}
                    {!mobileView && getMenuButtons()}
                    {/* <Link href="/news">
            <Button color="inherit">News</Button>
          </Link> */}
                    {/* <Link href="/about">
            <Button color="inherit">About</Button>
          </Link> */}
                    {/* <Link href="/auth/signin">
            <Button color="inherit">Login</Button>
          </Link> */}

                    {isXtaticLabsModalOpen && (
                        <XtaticLabModal
                            isModalOpen={isXtaticLabsModalOpen}
                            setModalVisibility={handleModalVisibility}
                        />
                    )}
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}

const mapStateToProps = (state) => ({
    darkMode: state.siteState.darkMode,
});

const mapDispatchToProps = {
    setDarkMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
