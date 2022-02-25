import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import { Button } from "@material-ui/core";
import classNames from "classnames";
import Modal from "@material-ui/core/Modal";
import { strings } from "src/constants";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    height: 400,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: theme.palette.success.main,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(100% - 40px)",
    paddingTop: "60px !important",
    maxWidth: "600px",
  },
  heading: {
    color: "#ffffff",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "10pt",
  },
  imageStyle: {
    width: 180,
  },
  mainDivCont: {
    background: `url("./images/popup_bg.png") no-repeat`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "40px 0",
  },
  innerDivCont: {
    background: `url("./images/popup_btn_bg.png") no-repeat`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "50%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
    marginBottom: "15px",
  },
  innerText: {
    color: "#000000",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "10pt",
  },
  btnStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "normal",
    fontSize: "10pt",
    borderRadius: 5,
    border: "1px solid #ffff00",
    padding: "9px 20px",
    textTransform: "capitalize",
  },
  modelClose: {
    cursor: "pointer",
    position: "absolute",
    right: "10px",
    top: "10px",
    padding: 0,
    background: "transparent",
    border: "none",
    '& img': {
      filter: "brightness(0) invert(1)",
      width: "25px",
    }
  }
}));

export default function XtaticLabModal(props) {
  const { isModalOpen, setModalVisibility } = props;
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setModalVisibility(false);
  };

  const body = (
    <div
      style={modalStyle}
      className={classNames(classes.paper, classes.mainDivCont)}
    >
      <button className={classes.modelClose} onClick={handleClose}><img src="./images/close-icon.png"></img></button>
      <h2 className={classes.heading}>
        <i>{strings.SOME_INFORMATION_ABOUT_XTATIC_LABS}</i>
      </h2>
      <div style={{ textAlign: "center" }}>
        <img
          src={"./images/xtatic_lab_icon.png"}
          alt=""
          className={classes.imageStyle}
        />
      </div>
      <div className={classes.innerDivCont}>
        <h2 className={classes.innerText}>{strings.SOME_TEXT_HERE}</h2>

        <a
          color="inherit"
          className={classes.btnStyle}
          target="_blank"
          href="https://drive.google.com/file/d/1hrqrazC7Tj20EBt-9C9WuJIa9AbwJhAd/view?usp=drivesdk"
        >
          {strings.LINK_TO_APK_TEXT}
        </a>
      </div>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
