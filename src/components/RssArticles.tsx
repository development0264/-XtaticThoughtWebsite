import React, {useState, useEffect} from "react";

import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-kit-pro-react/components/Card/Card.js";
import CardBody from "@material-kit-pro-react/components/Card/CardBody.js";
import CardHeader from "@material-kit-pro-react/components/Card/CardHeader.js";

import Info from "@material-kit-pro-react/components/Typography/Info.js";

import sectionInterestedStyle
  from "@material-kit-pro-react/assets/jss/material-kit-pro-react/views/blogPostsSections/sectionInterestedStyle.js";

import blogPostPageStyle from "@material-kit-pro-react/assets/jss/material-kit-pro-react/views/blogPostPageStyle.js";

import GridItem from "@material-kit-pro-react/components/Grid/GridItem";
import GridContainer from "@material-kit-pro-react/components/Grid/GridContainer";

// @ts-ignore
const useStyles = makeStyles(sectionInterestedStyle);

function generateCard(article, classes) {
  console.log(article)

  const {category, link, link_preview} = article;
  const {title, desc, image} = link_preview || {};
  // @ts-ignore
  return <GridItem xs={12} sm={4} md={4} lg={4} xl={4}><Card plain blog>
    <CardHeader image plain>
      <a href={link}>
        <img src={image} alt="..."/>
      </a>
      <div
        className={classes.coloredShadow}
        style={{
          backgroundImage: `url('${image}')`,
          opacity: "1"
        }}
      />
    </CardHeader>1
    <CardBody plain>

      <Info>
        <h6>category</h6>
      </Info>

      <h4 className={classes.cardTitle}>
        <a href={link}>
          {title}
        </a>
      </h4>
      <p className={classes.description}>
        {desc}
        <a href={link}> Read More </a>
      </p>
    </CardBody>
  </Card>
  </GridItem>
}

// @ts-ignore
const useStylesContainer = makeStyles(blogPostPageStyle);
export default function RssArticle(props) {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/articles/0/300`).then(res => res.json()).then(res => setArticles(res))
  }, [])

  const classes = useStyles();

  const classesContainer = useStylesContainer();

  return <div className={classesContainer.main}>
    <div className={classesContainer.container}>
      <div className={classes.section}>
        <h3 className={classes.title + " " + classes.textCenter}>
          You may also be interested in
        </h3>
        <br/>
        <GridContainer>

          {articles.map(article => generateCard(article, classes))}
        </GridContainer>
      </div>
    </div>
  </div>
}
