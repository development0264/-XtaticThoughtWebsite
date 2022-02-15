import React, { useState, useEffect, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
    Grid,
    Container
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
const fontFamily = `"Roboto", "Times New Roman", serif`;
const teamStyle = (theme) => ({
    dashboardChart: {
        paddingTop: 200,
        paddingBottom: 200,
        '@media (max-width: 991px)': {
            paddingTop: "140px",
            paddingBottom: "80px",
        },
        '@media (max-width: 767px)': {
            paddingBottom: "60px",
        },
        '@media (max-width: 575px)': {
            paddingBottom: "40px",
        },
    },
    chartRow: {

    },
    chartCanvas: {
        width: "100% !important",
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
    tableGraphDropdownLabel: {
        fontWeight: "normal",
        fontSize: "18px",
        fontFamily: "Montserrat",
        color: "#F1F1F1",
        margin: "0 10px 0 0",
    },
    monthDropdownBox: {
        marginLeft: "20px",
        marginRight: "20px",
        '@media (max-width: 575px)': {
            marginLeft: "0",
            marginRight: "0",
            marginBottom: "20px",
            width: "100%",
        },
    },
    yearDropdownBox: {
        '@media (max-width: 575px)': {
            marginBottom: "20px",
            marginTop: "20px",
            width: "100%",
        },
    },
    tableGraphHeaderBottom: {
        display: "flex",
        paddingTop: "30px",
        '@media (max-width: 1199px)': {
            flexWrap: "wrap",
        },
        '@media (max-width: 575px)': {
            paddingTop: "0",
        },
    },
    weelButtonsBox: {
        '@media (max-width: 1199px)': {
            width: "100%",
            marginTop: "30px",
        },
        '@media (max-width: 575px)': {
            width: "100%",
            marginTop: "0px",
        },
        '& .MuiToggleButtonGroup-root': {
            '@media (max-width: 575px)': {
                flexWrap: "wrap",
                width: "100%"
            },
        },
        '& button': {
            borderRadius: "0 !important",
            background: "#000000",
            border: "1px solid #4E4E4E !important",
            margin: "0 !important",
            fontWeight: "normal",
            fontSize: "18px",
            color: "#F1F1F1",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
            lineHeight: "normal",
            padding: "9px 18px",
            '@media (max-width: 575px)': {
                width: "100%",
                fontSize: "15px",
            },
            '&:hover': {
                background: "#000000",
            }
        },
        '& button + button': {
            marginLeft: "2px !important",
            '@media (max-width: 575px)': {
                marginLeft: "0 !important",
                marginTop: "4px !important",
            },
        },
        '& .Mui-selected': {
            background: "linear-gradient(270deg, #40FF00 1.6%, #16FFA8 89.02%, #00FFFF 102.96%)",
            color: "#000000",
            border: "none !important",
            '&:hover': {
                background: "linear-gradient(270deg, #40FF00 1.6%, #16FFA8 89.02%, #00FFFF 102.96%)",
            }
        },
    },
    tableSection: {
        position: "relative",
        backgroundImage: "url(./images/dots-bg.png)",
        width: "100%",
        '& .MuiTableCell-root': {
            borderBottom: "1px solid #000",
            padding: "8px 50px",
            '@media (max-width: 767px)': {
                padding: "8px 20px",
            },
        },
        '& .MuiTableContainer-root': {
            boxShadow: "none !important",
            borderRadius: "0",
            background: "transparent",
            border: "1px solid #4E4E4E",
            position: "relative",
        },
        '& tbody tr:nth-of-type(odd)': {
            background: "rgba(18, 18, 18, 0.5)",
        },
        '& tbody tr': {
            background: "rgba(0, 0, 0, 0.5)",
        },
        '& thead tr': {
            background: "rgba(0, 0, 0, 0.5)",
        },
        '& tbody td': {
            fontWeight: "normal",
            fontSize: "18px",
            fontFamily: "Montserrat",
            lineHeight: "27px",
            whiteSpace: "nowrap",
            '@media (max-width: 767px)': {
                fontSize: "16px",
                lineHeight: "normal",
            },
        },
        '& thead th': {
            fontWeight: "normal",
            fontSize: "18px",
            fontFamily: "Audiowide",
            lineHeight: "27px",
            whiteSpace: "nowrap",
            '@media (max-width: 767px)': {
                fontSize: "16px",
                lineHeight: "normal",
            },
        },
    },
    tableLeftEffect: {
        position: "absolute",
        maxHeight: "100%",
        left: "0",
        bottom: "0",
    }
});

const useStyles = makeStyles(teamStyle);
function DashboardTable(props) {
    let chartRef = useRef();
    useEffect(() => {

    }, []);
    const [week, setAlignment] = React.useState('Week 1');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const classes = useStyles();
    function createData(company, amount, date, type) {
        return { company, amount, date, type };
    }

    const rows = [
        createData('Name', '$ 1 Bil', 'March 7', 'Virtual reality'),
        createData('Name', '$ 10 Mil', 'March 3', 'Augmented reality'),
        createData('Name', '$ 60 K', 'March 5', 'Virtual reality'),
        createData('Name', '$ 100 Mil', 'March 2', 'EduTech'),
        createData('Name', '$ 20 K', 'March 6', 'Virtual reality'),
        createData('Name', '$ 6 Bil', 'March 4', 'EduTech'),
        createData('Name', '$ 400 Mil', 'March 5', 'Virtual reality'),
        createData('Name', '$ 2 Bil', 'March 1', 'Augmented reality'),
        createData('Name', '$ 30 Mil', 'March 1', 'Virtual reality'),
    ];
    return (
        <div className={classes.dashboardChart}>
            <Container>
                <Grid container className={classes.chartRow}>
                    <div className={classes.tableGraphHeader} data-aos="fade-down" data-aos-duration="1000">
                        <div className={classes.tableGraphHeaderTop} >
                            <div className={classes.tableGraphPage}>
                                <Link href="/table"><a className={classes.pageActive}>Table</a></Link>
                                <Link href="/dashboard"><a className={classes.pageInactive}>Graph</a></Link>
                            </div>
                            <div className={classes.tableGraphDropdownOuter}>
                                <label className={classes.tableGraphDropdownLabel}>Sort by</label>
                                <div className={classes.tableGraphDropdownBox}>
                                    <img className={classes.dropdownArrow} src="./images/dropdown-icon.png"></img>
                                    <select className={classes.tableGraphDropdown}>
                                        <option selected>Name</option>
                                        <option>Date</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={classes.tableGraphHeaderBottom}>
                            <div className={classes.yearDropdownBox}>
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
                            <div className={classes.monthDropdownBox}>
                                <div className={classes.tableGraphDropdownBox}>
                                    <img className={classes.dropdownArrow} src="./images/dropdown-icon.png"></img>
                                    <select className={classes.tableGraphDropdown}>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>November</option>
                                        <option>December</option>
                                    </select>
                                </div>
                            </div>
                            <div className={classes.weelButtonsBox}>
                                <ToggleButtonGroup
                                    value={week}
                                    exclusive
                                    onChange={handleAlignment}
                                >
                                    <ToggleButton value="Week 1" aria-label="Week 1">
                                        Week 1
                                    </ToggleButton>
                                    <ToggleButton value="Week 2" aria-label="Week 2">
                                        Week 2
                                    </ToggleButton>
                                    <ToggleButton value="Week 3" aria-label="Week 3">
                                        Week 3
                                    </ToggleButton>
                                    <ToggleButton value="Week 4" aria-label="Week 4">
                                        Week 4
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </div>
                        </div>
                    </div>
                    <div className={classes.tableSection} data-aos="fade-up" data-aos-duration="1000">
                        <img className={classes.tableLeftEffect} src="./images/table-left-effect.png"></img>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Company</TableCell>
                                        <TableCell>Amount</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Type (AR/VR)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell>{row.company}</TableCell>
                                            <TableCell>{row.amount}</TableCell>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.type}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
            </Container>
        </div>
    );
};

export default (DashboardTable);