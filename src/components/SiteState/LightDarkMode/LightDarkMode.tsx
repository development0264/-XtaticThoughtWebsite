import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { Brightness4, Brightness7 } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  toggle: {
    color: `${theme.palette.common.white} !important`
  }
}));

export default function LightDarkMode({ darkMode, setDarkMode }) {
  const styles = useStyles();

  return (
    <ToggleButton
      className={styles.toggle}
      value="check"
      selected={darkMode}
      onChange={() => {
        setDarkMode(!darkMode);
      }}
    >
      {darkMode ? <Brightness7 /> : <Brightness4 />}
    </ToggleButton>
  );
}
