import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Zoom from "@material-ui/core/Zoom";
import { Fab } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  anchorTarget: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 100,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    scrollToTopBtn: {
      width: 70,
      cursor: "pointer",
    },
  })
);

function ScrollTop(props: Props) {
  const { children, window, anchorTarget } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector(anchorTarget);

    console.log(anchorTarget);

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export function ScrollToTopButton(props) {
  const classes = useStyles();
  return (
    <ScrollTop {...props}>
      {/* <Fab color="secondary" size="small" aria-label="scroll back to top"> */}
      {/* <KeyboardArrowUp /> */}
      <img
        src={"./images/scroll_to_top.png"}
        className={classes.scrollToTopBtn}
      />
      {/* </Fab> */}
    </ScrollTop>
  );
}
