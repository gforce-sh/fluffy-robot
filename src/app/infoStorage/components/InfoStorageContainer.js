import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import "semantic-ui-css/semantic.min.css";
import Grid from "@material-ui/core/Grid";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class InfoStorageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div css={{ textAlign: "center" }} className="InfoStorageContainer">
        <Grid container xs={12} justify="center">
          <Grid item xs={12}>
            <div css={{ height: 100 }} />
          </Grid>
          <Grid item xs={12}>
            <div
              css={{
                display: "flex",
                justifyContent: "center"
              }}>
              <Link to="/">
                <Card>
                  <Card.Content
                    style={{ background: "grey" }}
                    css={{
                      display: "flex",
                      justifyContent: "center"
                    }}>
                    <Icon size="large" name="hand peace outline" color="teal" />
                    <Card.Header style={{ color: "white" }}>
                      InfoStorageContainer!
                    </Card.Header>
                  </Card.Content>
                </Card>
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default InfoStorageContainer;
