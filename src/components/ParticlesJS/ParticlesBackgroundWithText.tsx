import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-tsparticles";

// @ts-ignore
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1,
    backgroundColor: "#000000",
    color: "#2eb700",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  },
  title: {
    fontSize: "60px",
    color: "#40ff00",
    fontWeight: 500,
  },
  blockText: {
    whiteSpace: "wrap",
    fontSize: "20px",
  },
  textContainer: {
    position: "absolute",
    textAlign: "center",
  },
  particles: {
    width: "100%",
  },
}));

export function ParticlesBackgroundWithText(props) {
  const classes = useStyles();
  const { titleText, children } = props;
  const particleParams = require("./config.json");
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.title}>{titleText}</div>
        <div className={classes.blockText}>{children}</div>
      </div>
      <Particles
        className={classes.particles}
        height="100vh"
        params={particleParams}
      />
    </div>
  );
}
