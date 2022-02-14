import React, { useState, useEffect, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import {
    mrAuto,
    mlAuto,
    title,
    description,
    cardTitle,
} from "@material-kit-pro-react/assets/jss/material-kit-pro-react.js";
// import { Scrollbars } from "react-custom-scrollbars";
import ShareIcon from "@material-ui/icons/Share";
import { connect } from "react-redux";
import { setDarkMode } from "../../components/SiteState/state/actions";
import { strings, colors } from "../../constants";
import {
    Grid,
    Container
} from "@material-ui/core";
import { Chart } from "chart.js";

const fontFamily = `"Roboto", "Times New Roman", serif`;
const teamStyle = (theme) => ({
    dashboardChart: {
        paddingTop: 200,
        '@media (max-width: 899px)': {
            paddingTop: "140px",
        },
    },
    chartRow: {

    },
    chartCanvas: {
        width: "100% !important",
        zIndex: "11",
        maxWidth: "900px",
        position: "relative",
        margin: "0 auto",
    },
    tableGraphHeader: {
        width: "100%",
        paddingBottom: "50px",
    },
    tableGraphHeaderTop: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
    },
    tableGraphPage: {
        display: "flex",
        alignItems: "center",
        '@media (max-width: 575px)': {
            width: "100%",
        },
        '& a + a': {
            marginLeft: "2px",
        }
    },
    pageInactive: {
        textDecoration: "none",
        background: "#000000",
        fontWeight: "normal",
        fontSize: "18px",
        fontFamily: "Montserrat",
        padding: "9px 19px",
        lineHeight: "normal",
        color: "#F1F1F1",
        border: "1px solid #4E4E4E",
        '@media (max-width: 767px)': {
            fontSize: "16px",
        },
    },
    pageActive: {
        background: "linear-gradient(270deg, #40FF00 1.6%, #16FFA8 89.02%, #00FFFF 102.96%)",
        textDecoration: "none",
        color: "#121212",
        fontWeight: "normal",
        fontSize: "18px",
        fontFamily: "Montserrat",
        padding: "10px 20px",
        lineHeight: "normal",
        '@media (max-width: 767px)': {
            fontSize: "16px",
        },
    },
    tableGraphDropdownOuter: {
        marginLeft: "23px",
        display: "flex",
        alignItems: "center",
        '@media (max-width: 575px)': {
            margin: "20px 0 0 0",
        },
    },
    tableGraphDropdownBox: {
        position: "relative",
        display: "inline-block",
    },
    dropdownArrow: {
        position: "absolute",
        right: "20px",
        pointerEvents: "none",
        top: "50%",
        transform: "translateY(-50%)",
    },
    tableGraphDropdown: {
        background: "#000000",
        border: "1px solid #4E4E4E",
        fontWeight: "normal",
        fontSize: "18px",
        fontFamily: "Montserrat",
        color: "#F1F1F1",
        appearance: "none",
        minWidth: "190px",
        maxWidth: "190px",
        padding: "9px 20px",
        '@media (max-width: 767px)': {
            fontSize: "16px",
        },
        '&:focus': {
            outline: "none",
        }
    },
    chartWrap: {
        width: "100%",
        border: "1px solid #4E4E4E",
        position: "relative",
        backgroundImage: "url(./images/dots-bg.png)",
        padding: "50px 20px",
    },
    chartWrapInner: {

    },
    tableLeftEffect: {
        position: "absolute",
        maxHeight: "100%",
        left: "0",
        bottom: "0",
    }
});

const useStyles = makeStyles(teamStyle);
function DashboardChart(props) {
    let chartRef = useRef();
    useEffect(() => {
        var ctx = document.getElementById('myChart').getContext("2d");

        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#40FF00');
        gradientStroke.addColorStop(1, '#00FFFF');

        var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
        gradientFill.addColorStop(0, "rgba(64, 255, 0, 0.3)");
        gradientFill.addColorStop(1, "rgba(0, 255, 255, 0.3)");
        let chart = new Chart(chartRef.current, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Dec',],
                datasets: [{
                    label: 'Cookies per week',
                    data: [500000, 80000000, 100000000, 100000000, 50000000, 110000000, 150000000, 210000000, 310000000, 350000000, 450000000, 550000000],
                    borderColor: gradientStroke,
                    pointBorderColor: gradientStroke,
                    pointBackgroundColor: gradientStroke,
                    pointHoverBackgroundColor: gradientStroke,
                    pointHoverBorderColor: gradientStroke,
                    pointBorderWidth: 10,
                    pointHoverRadius: 10,
                    pointHoverBorderWidth: 1,
                    pointRadius: 3,
                    fill: true,
                    backgroundColor: gradientFill,
                    borderWidth: 4,
                }],

            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            min: 100000, //minimum tick
                            // max: 10000000000, //maximum tick
                            callback: function (value, index, values) {
                                if (value > 999999999)
                                    return value / 1000000000 + "B"
                                else if (value > 999999)
                                    return value / 1000000 + "M";
                                else if (value > 999)
                                    return value / 1000 + "K";
                                else
                                    return
                            }
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "white",
                        }
                    }]

                },
                legend: {
                    display: false
                }
            }
        });
    }, []);
    const classes = useStyles();
    return (
        <div className={classes.dashboardChart}>
            <Container>
                <Grid container className={classes.chartRow}>
                    <div className={classes.tableGraphHeader} data-aos="fade-down" data-aos-duration="1000">
                        <div className={classes.tableGraphHeaderTop}>
                            <div className={classes.tableGraphPage}>
                                <a href="#" className={classes.pageInactive}>Table</a>
                                <a href="#" className={classes.pageActive}>Graph</a>
                            </div>
                            <div className={classes.tableGraphDropdownOuter}>
                                <div className={classes.tableGraphDropdownBox}>
                                    <img className={classes.dropdownArrow} src="./images/dropdown-icon.png"></img>
                                    <select className={classes.tableGraphDropdown}>
                                        <option>2015</option>
                                        <option>2016</option>
                                        <option>2017</option>
                                        <option>2018</option>
                                        <option>2019</option>
                                        <option>2020</option>
                                        <option selected>2021</option>
                                        <option>2022</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.chartWrap} data-aos="zoom-in" data-aos-duration="1000">
                        <div className={classes.chartWrapInner}>
                            <img className={classes.tableLeftEffect} src="./images/graph-left-effect.png"></img>
                            <canvas className={classes.chartCanvas} id="myChart" ref={chartRef} />
                        </div>
                    </div>
                </Grid>
            </Container>
        </div>
    );
};

export default (DashboardChart);