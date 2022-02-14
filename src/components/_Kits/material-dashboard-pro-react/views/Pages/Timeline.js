import React from "react";

// core components
import GridContainer from "@material-dashboard-pro-react/components/Grid/GridContainer.js";
import GridItem from "@material-dashboard-pro-react/components/Grid/GridItem.js";
import Heading from "@material-dashboard-pro-react/components/Heading/Heading.js";
import Timeline from "@material-dashboard-pro-react/components/Timeline/Timeline.js";
import Card from "@material-dashboard-pro-react/components/Card/Card.js";
import CardBody from "@material-dashboard-pro-react/components/Card/CardBody.js";

import { stories } from "@material-dashboard-pro-react/variables/general.js";

export default function TimelinePage() {
  return (
    <div>
      <Heading title="Timeline" textAlign="center" />
      <GridContainer>
        <GridItem xs={12}>
          <Card plain>
            <CardBody plain>
              <Timeline stories={stories} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
