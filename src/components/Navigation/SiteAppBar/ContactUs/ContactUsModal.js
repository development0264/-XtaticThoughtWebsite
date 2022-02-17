import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Button from "@material-kit-pro-react/components/CustomButtons/Button.js";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import classNames from "classnames";
import Modal from "@material-ui/core/Modal";
import { strings, colors } from "src/constants";

let styles = {
  contactUsTextStyle: {
    color: colors.lightGreen,
    display: "flex",
    justifyContent: "center",
    fontSize: 40,
    marginBottom: 0,
  },
  learnMoreAboutHeading: {
    color: colors.white,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  emailUsHeading: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  emailXtaticThought: {
    color: colors.headingColorGreen,
    fontSize: 20,
    marginLeft: 12,
    marginBottom: 0,
    fontWeight: "450",
  },
  emailUsCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 0,
  },
  findUsOnSocialMediaText: {
    color: colors.white,
    fontSize: 20,
    justifyContent: "center",
    display: "flex",
    marginBottom: 0,
  },
  socialMediaIconsCont: {
    display: "flex",
    justifyContent: "center",
  },
};

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
    // width: 400,
    maxWidth: 600,
    // backgroundColor: theme.palette.background.paper,
    backgroundColor: colors.black,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 2, 3),
    width: "calc(100% - 40px)",
  },
  socialIcon: {
    width: 35,
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



export default function ContactUsModal(props) {
  const { isModalOpen, setModalVisibility } = props;
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    setModalVisibility(false);
  };

  const body = (
    <div style={modalStyle} className={classNames(classes.paper)}>
      <button className={classes.modelClose} onClick={handleClose}><img src="./images/close-icon.png"></img></button>
      <p style={styles.contactUsTextStyle}>{strings.CONTACT_US}</p>

      <p style={styles.learnMoreAboutHeading}>
        {strings.LEARN_MORE_ABOUT_OUR_PRDCTS}
        <br />
        {strings.WE_LOOK_FORWARD}
      </p>

      <div style={styles.emailUsCont}>
        <p style={styles.emailUsHeading}>{strings.EMAIL_US}</p>
        <p style={styles.emailXtaticThought}>{strings.EMAIL_XTATIC_THOUGHT}</p>
      </div>

      <h1 style={styles.findUsOnSocialMediaText}>
        {strings.FIND_US_ON_SOCIAL_MEDIA}
      </h1>
      <div style={styles.socialMediaIconsCont}>
        <Button href="#pablo" justIcon simple color="facebook-messenger">
          <img src={"./images/messenger.png"} className={classes.socialIcon} />
        </Button>
        <Button href="#pablo" justIcon simple color="facebook">
          <img src={"./images/facebook.png"} className={classes.socialIcon} />
        </Button>
        <Button href="#pablo" justIcon simple color="linkedin">
          <img src={"./images/linkedin.png"} className={classes.socialIcon} />
        </Button>
        <Button href="#pablo" justIcon simple color="twitter">
          <img src={"./images/twitter.png"} className={classes.socialIcon} />
        </Button>
        <Button href="#pablo" justIcon simple color="instagram">
          <img src={"./images/instagram.png"} className={classes.socialIcon} />
        </Button>
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
