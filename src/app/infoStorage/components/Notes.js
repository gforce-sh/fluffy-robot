/** @jsx jsx */
import { jsx } from "@emotion/core";
import "semantic-ui-css/semantic.min.css";
import Grid from "@material-ui/core/Grid";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Notes = props => {
  return (
    <div css={{ textAlign: "center" }} className="InfoStorageNotes">
      <Grid container xs={12} justify="center">
        <Grid item xs={12}>
          <div css={{ height: 200 }} />
        </Grid>
        <Grid item xs={12}>
          <div
            css={{
              display: "flex",
              justifyContent: "center"
            }}>
            <Link to="/infoStorage">
              <Card>
                <Card.Content
                  style={{ background: "whitesmoke" }}
                  css={{
                    display: "flex",
                    justifyContent: "center"
                  }}>
                  <Icon size="large" name="hand peace" color="teal" />
                  <Card.Header style={{ color: "grey" }}>
                    Hello there!
                  </Card.Header>
                </Card.Content>
              </Card>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Notes;
