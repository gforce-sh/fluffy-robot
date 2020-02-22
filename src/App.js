import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import "semantic-ui-css/semantic.min.css";
import Grid from "@material-ui/core/Grid";
import { Card, Icon } from "semantic-ui-react";

function App() {
  return (
    <div css={{ textAlign: "center" }} className="App">
      <Grid container xs={12} justify="center">
        <Grid item xs="auto">
          <Card>
            <Card.Content css={{ display: "flex", justifyContent: "center" }}>
              <Icon size="large" name="hand peace outline" />
              <Card.Header css={{ color: "grey" }}>Hello there!</Card.Header>
            </Card.Content>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
