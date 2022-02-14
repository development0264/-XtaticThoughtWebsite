import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Card, CardMedia } from "@material-ui/core";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { borderRadius16px } from "../blocks/siteWideStyles";

const useStyles = makeStyles(theme => ({
  card: {
    cursor: "pointer",
    ...borderRadius16px,
    boxShadow: "none",
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "height 0.4s ease 0s",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))"
    }
  },
  halfSized: {
    borderRadius: `${borderRadius16px.borderRadius}px ${borderRadius16px.borderRadius}px 0 0`,
    height: "50%"
  },
  contentTop: {
    position: "absolute",
    zIndex: 2,
    top: 0,
    width: "100%",
    padding: theme.spacing(2)
  },
  contentBottom: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
    padding: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(255, 255, 255, 0.25)"
  },
  cardMedia: {
    transition: "transform 0.4s ease 0s"
  },
  cardHovered: {
    transform: "scale(1.15)"
  },
  floatRight: {
    width: "fit-content",
    float: "right"
  }
}));

export const FullImageCardZoom = function FullImageCardZm(props) {
  const {
    imageUrl,
    centerBottom,
    leftTop,
    rightTop,
    leftBottom,
    rightBottom,
    halfSized,
    onClick
  } = props;
  const [isCardHovered, setIsCardHovered] = useState(false);

  const setCardHovered = () => {
    setIsCardHovered(true);
  };

  const removeCardHovered = () => {
    setIsCardHovered(false);
  };

  const mediaStyles = useCoverCardMediaStyles({
    bgPosition: "center"
  });
  const styles = useStyles();
  return (
    <>
      <Card
        className={clsx(styles.card, {
          [styles.halfSized]: halfSized
        })}
        onMouseEnter={setCardHovered}
        onMouseLeave={removeCardHovered}
        onFocus={setCardHovered}
        onBlur={removeCardHovered}
        onClick={onClick}
      >
        <CardMedia
          classes={mediaStyles}
          image={imageUrl}
          className={clsx(styles.cardMedia, {
            [styles.cardHovered]: isCardHovered,
          })}
        />
        <Box py={3} px={2} className={styles.contentTop}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid key="left" item xs={6}>
              <div>{leftTop}</div>
            </Grid>
            <Grid key="right" item xs={6}>
              <div className={styles.floatRight}>{rightTop}</div>
            </Grid>
          </Grid>
        </Box>
        <Box py={3} px={2} className={styles.contentBottom}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            {centerBottom}
          </Grid>
          {!halfSized && (
            <>
              <div className={styles.divider} />
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid key="left" item xs={6}>
                  <div>{leftBottom}</div>
                </Grid>
                <Grid key="right" item xs={6}>
                  <div className={styles.floatRight}>{rightBottom}</div>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Card>
    </>
  );
};

export default FullImageCardZoom;
