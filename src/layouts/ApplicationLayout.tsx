import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { SiteDrawer } from "../components/SiteDrawer/SiteDrawer";
import SiteAppBar from "../components/Navigation/SiteAppBar/SiteAppBar";
import Header from "../components/Navigation/SiteAppBar/Header";
import { strings } from "src/constants";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "100%",
    // marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function ApplicationLayout(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { setSelectedServiceItem } = props;

  return (
    <div className={classes.root}>
      {/* <SiteAppBar
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        setSelectedServiceItem={setSelectedServiceItem}
      /> */}
      <Header />
      {/* <SiteDrawer
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerClose={handleDrawerClose}
      /> */}
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {/* <Toolbar id="navBarAnchor" /> */}
        <div>{props.children}</div>
      </main>
      {/* <ScrollToTopButton anchorTarget="#navBarAnchor" /> */}
    </div>
  );
}
