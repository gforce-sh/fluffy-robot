import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import "semantic-ui-css/semantic.min.css";
import Grid from "@material-ui/core/Grid";
import { Divider, Segment, Icon } from "semantic-ui-react";
import UploadArena from "./UploadArena";
import Notes from "./Notes";

class InfoStorageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Segment basic>
        <Grid container justify="center">
          <Grid
            item
            spacing={2}
            container
            xs={12}
            direction="row"
            alignItems="center"
            justify="space-around">
            <Grid item xs="auto">
              <Notes />
            </Grid>
            <Grid item xs="auto">
              <UploadArena />
            </Grid>
            <Divider vertical>
              <Icon name="paper plane outline" />
            </Divider>
          </Grid>
        </Grid>
      </Segment>
    );
  }
}

export default InfoStorageContainer;
