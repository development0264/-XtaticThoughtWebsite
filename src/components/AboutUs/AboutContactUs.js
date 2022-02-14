import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "@material-kit-pro-react/components/Grid/GridContainer.js";
import GridItem from "@material-kit-pro-react/components/Grid/GridItem.js";
import CustomInput from "@material-kit-pro-react/components/CustomInput/CustomInput.js";
import Button from "@material-kit-pro-react/components/CustomButtons/Button.js";
import { ScrollToTopButton } from "../../components/ScrollToTopButton";

import {
  title,
  description,
  mrAuto,
  mlAuto,
  primaryColor,
  primaryBoxShadow,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "@material-kit-pro-react/assets/jss/material-kit-pro-react.js";

const customSelectStyle = (theme) => ({
  select: {
    padding: "12px 0 7px",
    fontSize: ".75rem",
    fontWeight: "400",
    lineHeight: "1.42857",
    textDecoration: "none",
    textTransform: "uppercase",
    color: theme.palette.text.primary,
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent",
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)",
    },
    "& + input + svg": {
      transition: "all 300ms linear",
    },
  },
  selectFormControl: {
    margin: "10px 1px 10px 0px !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: grayColor[11] + " !important",
      },
      "&:after": {
        borderBottomColor: primaryColor[0] + "!important",
      },
    },
  },
  selectLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: grayColor[1] + " !important",
    top: "8px",
  },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: whiteColor,
      backgroundClip: "padding-box",
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit",
    },
  },
  selectMenuItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: grayColor[8],
    paddingRight: "30px",
    "&:hover": {
      backgroundColor: primaryColor[0],
      color: whiteColor,
      ...primaryBoxShadow,
    },
  },
  selectMenuItemSelected: {
    backgroundColor: primaryColor[0] + "!important",
    color: whiteColor,
  },
  selectMenuItemSelectedMultiple: {
    "&:hover": {
      backgroundColor: primaryColor[0] + "!important",
      color: whiteColor,
      ...primaryBoxShadow,
      "&:after": {
        color: whiteColor,
      },
    },
    "&:after": {
      top: "16px",
      right: "12px",
      width: "12px",
      height: "5px",
      borderLeft: "2px solid currentColor",
      transform: "rotate(-45deg)",
      opacity: "1",
      color: grayColor[1],
      position: "absolute",
      content: "''",
      borderBottom: "2px solid currentColor",
      transition: "opacity 90ms cubic-bezier(0,0,.2,.1)",
    },
  },
  selectPaper: {
    boxSizing: "borderBox",
    borderRadius: "4px",
    padding: "0",
    minWidth: "100%",
    display: "block",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(" + hexToRgb(blackColor) + ", 0.26)",
    backgroundClip: "padding-box",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "transparent",
    maxHeight: "266px",
  },
});

const contactStyle = (theme) => ({
  title: {
    ...title,
    color: theme.palette.text.primary,
  },
  mrAuto,
  mlAuto,
  ...customSelectStyle(theme),
  description: {
    ...description,
    marginBottom: "70px",
  },
  textCenter: {
    textAlign: "center!important",
  },
  selectUnderlineRoot: {
    "& > div": {
      marginTop: "13px",
    },
  },
  aboutUs: {
    padding: "80px 0px",
    maxWidth: "1140px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      padding: "80px 15px",
    },
  },
});

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  const [specialitySelect, setSpecialitySelect] = React.useState("1");
  const handleSpeciality = (event) => {
    setSpecialitySelect(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classNames(classes.title, classes.textCenter)}>
            Partnerships and Collaborations
          </h2>
          <h4 className={classNames(classes.description, classes.textCenter)}>
            Want to work with us? Creating a brighter tomorrow takes more than a
            good team. A great community holds value and responsibility for the
            future of technology. Its coexistance with humanity for the
            betterment of life.
          </h4>
          <form>
            <GridContainer>
              <GridItem md={4} sm={4}>
                <CustomInput
                  labelText="Your name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <CustomInput
                  labelText="Your email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem md={4} sm={4}>
                <FormControl
                  fullWidth
                  className={
                    classes.selectFormControl +
                    " " +
                    classes.selectUnderlineRoot
                  }
                >
                  <Select
                    MenuProps={{
                      className: classes.selectMenu,
                    }}
                    classes={{
                      select: classes.select,
                    }}
                    value={specialitySelect}
                    onChange={handleSpeciality}
                    inputProps={{
                      name: "specialitySelect",
                      id: "speciality-select",
                    }}
                  >
                    <MenuItem
                      disabled
                      classes={{
                        root: classes.selectMenuItem,
                      }}
                    >
                      Speciality
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="1"
                    >
                      I{"'"}m a Designer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="2"
                    >
                      I{"'"}m a Developer
                    </MenuItem>
                    <MenuItem
                      classes={{
                        root: classes.selectMenuItem,
                        selected: classes.selectMenuItemSelected,
                      }}
                      value="3"
                    >
                      I{"'"}m a Hero
                    </MenuItem>
                  </Select>
                </FormControl>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem
                md={4}
                sm={4}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
                <Button color="primary" round>
                  Let{"'"}s talk
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
      <ScrollToTopButton anchorTarget="#navBarAnchor" />
    </div>
  );
}
