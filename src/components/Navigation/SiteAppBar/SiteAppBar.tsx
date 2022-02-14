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
    marginRight: theme.spacing(2),
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
}));

function SiteAppBar(props: SiteAppBarProps) {
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
        <Typography
          variant="h6"
          className={props.darkMode ? classes.title : classes.titleLight}
        >
          <NextLinkNoStyle
            href="/"
            style={
              mobileView ? { display: "flex", justifyContent: "center" } : {}
            }
          >
            Xtatic Thought
          </NextLinkNoStyle>
        </Typography>

        <div className={mobileView ? classes.mobileViewDivCont : ""}>
          <Link href="/">
            <Button
              onClick={() => {
                setState((prevState) => ({ ...prevState, drawerOpen: false }));
              }}
              className={
                props.darkMode ? classes.navbarAnchorTag : classes.anchorLight
              }
            >
              {strings.HOME}
            </Button>
          </Link>
          <Link href="">
            <Button
              onClick={() => {
                setState((prevState) => ({ ...prevState, drawerOpen: false }));
                handleModalVisibility(!isXtaticLabsModalOpen);
              }}
              className={
                props.darkMode ? classes.navbarAnchorTag : classes.anchorLight
              }
            >
              {strings.XTATIC_LAB}
            </Button>
          </Link>
          <Link href="/#how-we-help">
            <Button
              onClick={() => {
                setState((prevState) => ({ ...prevState, drawerOpen: false }));
                props.setSelectedServiceItem();
              }}
              className={
                props.darkMode ? classes.navbarAnchorTag : classes.anchorLight
              }
            >
              {strings.XTATIC_ART}
            </Button>
          </Link>

          {/* <Link href="/dashboard">
            <Button
              onClick={() => {
                setState((prevState) => ({ ...prevState, drawerOpen: false }));
              }}
              className={
                props.darkMode ? classes.navbarAnchorTag : classes.anchorLight
              }
            >
              {strings.DASHBOARD}
            </Button>
          </Link> */}

          <LightDarkMode />
        </div>
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
        <Toolbar>
          {mobileView && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, drawerOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
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
                  backgroundColor: !props.darkMode
                    ? colors.darkGreen
                    : colors.black,
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

export default connect(mapStateToProps, mapDispatchToProps)(SiteAppBar);
