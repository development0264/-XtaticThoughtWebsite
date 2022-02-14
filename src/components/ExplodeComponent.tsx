import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  explode: {
    position: "fixed",
    top: "0px",
    right: "0px",
    width: "100vw !important",
    height: "100vh !important",
    borderRadius: 0,
    zIndex: 1500
  },
  cardContainer: {
    height: "100%",
    width: "100%",
    maxHeight: "840px",
    maxWidth: "420px",
    overflow: "hidden"
  },
  preventClick: {
    pointerEvents: "none"
  },
  closeButton: {
    fontSize: "40px",
    display: "none"
  },
  closeButtonShow: {
    display: "block",
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: "70px",
    position: "absolute",
    top: "25%",
    zIndex: 2000,
    cursor: "pointer",
    pointerEvents: "none"
  },
  containerDiv: props => props
}));

export default function ExplodeComponent({
  children,
  exploded,
  styleParams,
  unexplode
}) {
  const styles = useStyles({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(16px)",
    ...styleParams
  });
  if (process.browser) {
    if (exploded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <div
      className={clsx(styles.containerDiv, { [styles.explode]: exploded })}
      onClick={() => false && exploded && unexplode()}
    >
      <CancelIcon
        className={clsx(styles.closeButton, {
          [styles.closeButtonShow]: exploded
        })}
      />
      <div
        className={clsx(styles.cardContainer, {
          [styles.preventClick]: false && exploded
        })}
      >
        {children}
      </div>
    </div>
  );
}
