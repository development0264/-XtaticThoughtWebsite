import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppicationLayout from "../src/layouts/ApplicationLayout";
import { strings } from "src/constants";
import { DarkBg } from "../src/components/ParticlesJS/DarkBg";
import Footer from "../src/components/Footer/Footer";
import DashboardTable from "../src/components/Table/DashboardTable";

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
            <DashboardTable />
            <Footer />
        </AppicationLayout>
    );
};
