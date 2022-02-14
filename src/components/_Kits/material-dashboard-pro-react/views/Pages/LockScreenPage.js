import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Button from "@material-dashboard-pro-react/components/CustomButtons/Button.js";
import CustomInput from "@material-dashboard-pro-react/components/CustomInput/CustomInput.js";
import Card from "@material-dashboard-pro-react/components/Card/Card.js";
import CardBody from "@material-dashboard-pro-react/components/Card/CardBody.js";
import CardAvatar from "@material-dashboard-pro-react/components/Card/CardAvatar.js";
import CardFooter from "@material-dashboard-pro-react/components/Card/CardFooter.js";

import avatar from "@material-dashboard-pro-react/assets/img/faces/avatar.jpg";

import styles from "@material-dashboard-pro-react/assets/jss/material-dashboard-pro-react/views/lockScreenPageStyle.js";

const useStyles = makeStyles(styles);

export default function LockScreenPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <form>
        <Card
          profile
          className={classes.customCardClass + " " + classes[cardAnimaton]}
        >
          <CardAvatar profile className={classes.cardAvatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          <CardBody profile>
            <h4 className={classes.cardTitle}>Tania Andrew</h4>
            <CustomInput
              labelText="Enter Password"
              id="company-disabled"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "password",
                autoComplete: "off"
              }}
            />
          </CardBody>
          <CardFooter className={classes.justifyContentCenter}>
            <Button color="rose" round>
              Unlock
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
