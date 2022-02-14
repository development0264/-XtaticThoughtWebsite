import React, { useState } from "react";
// import styled from "styled-components";
import QRCode from "qrcode.react";
import { useIdentity } from "../src/hocs/withIdentity";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppicationLayout from "../src/layouts/ApplicationLayout";
// import Carousel from "../src/components/Carousel";
import { ParticlesBackgroundWithText } from "../src/components/ParticlesJS/ParticlesBackgroundWithText";
// import { AboutUs } from "../src/components/AboutUs/AboutUs";
// import { AboutUsImgCards } from "../src/components/AboutUs/AboutUsImgCards";
// import { ButtonFillUp } from "../src/components/Buttons/ButtonFillUp/ButtonFillUp";
// import {MarketCardsContainer} from "../src/components/prediqt/MarketCard/MarketCardsContainer";
import { DarkBg } from "../src/components/ParticlesJS/DarkBg";
import AboutUsTeam from "../src/components/AboutUs/AboutUsTeam";
import AboutUsCompany from "../src/components/AboutUs/AboutUsCompany";
import AboutContactUs from "../src/components/AboutUs/AboutContactUs";
import Footer from "../src/components/Footer/Footer";
import WhoWeAreSection from "../src/components/WhoWeAre/WhoWeAreSection";
import HowWeHelpSection from "../src/components/HowWeHelp/HowWeHelpSection";
import { strings } from "src/constants";

const useStyles = makeStyles((theme) => ({
  qr_code: {
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default () => {
  const identity = useIdentity();

  const classes = useStyles();

  const [selectedService, setSelectedService] = useState(
    strings.HOW_WE_HELP_OPTIONS[0]
  );

  const setSelectedServiceItem = (item: any) => {
    setSelectedService(item ? item : strings.HOW_WE_HELP_OPTIONS[0]);
  };

  return (
    <AppicationLayout setSelectedServiceItem={setSelectedServiceItem}>
      {/*<ButtonFillUp buttonText="BUY SHARES" labelText="0.10 IQ" />*/}
      {/* <ParticlesBackgroundWithText titleText={"Limitless Opportunity"} /> */}
      <DarkBg />
      {/*<AboutUsImgCards />*/}
      <WhoWeAreSection />
      <HowWeHelpSection
        selectedServiceItem={selectedService}
        setSelectedServiceItem={setSelectedServiceItem}
      />
      <AboutUsTeam />
      {/* <AboutUsCompany /> */}
      {/* <AboutContactUs /> */}
      <Footer />
      {/*<Carousel />*/}
      {/*<MarketCardsContainer/>*/}
      {identity && (
        <Container component="main" maxWidth="xs">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs>
              <Typography variant="h3">
                {identity.session.displayName}
              </Typography>
            </Grid>
            <Grid item xs>
              <Paper elevation={3} className={classes.qr_code}>
                <QRCode value={JSON.stringify(identity.token)} size={300} />
              </Paper>
            </Grid>
            <Grid item xs>
              <a href="/api/auth/logout">
                <Button fullWidth variant="contained" color="primary">
                  Log Out
                </Button>
              </a>
            </Grid>
          </Grid>
          {/*<h1>{JSON.stringify(identity)}</h1>*/}
        </Container>
      )}
    </AppicationLayout>
  );
};
