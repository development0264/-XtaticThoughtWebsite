import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppicationLayout from "../src/layouts/ApplicationLayout";
import ImmersiveMarketNewsList from "../src/components/dashboard/ImmersiveMarketNews";
import XRSocialMedia from "../src/components/dashboard/XRSocialMedia";
import { strings } from "src/constants";
import { DarkBg } from "../src/components/ParticlesJS/DarkBg";
import Footer from "../src/components/Footer/Footer";
import { Dashboard } from "@material-ui/icons";
import DashboardChart from "../src/components/dashboard/dashboardChart";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default () => {
  const classes = useStyles();

  const [selectedService, setSelectedService] = useState(
    strings.HOW_WE_HELP_OPTIONS[0]
  );

  const setSelectedServiceItem = (item) => {
    setSelectedService(item ? item : strings.HOW_WE_HELP_OPTIONS[0]);
  };

  return (
    <AppicationLayout setSelectedServiceItem={setSelectedServiceItem}>
      <DarkBg />
      <DashboardChart />
      <ImmersiveMarketNewsList />
      <XRSocialMedia />
      <Footer />
    </AppicationLayout>
  );
};
