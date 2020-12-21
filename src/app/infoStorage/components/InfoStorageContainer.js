import Grid from "@material-ui/core/Grid";
import { Divider, Segment, Icon } from "semantic-ui-react";
import UploadArena from "./UploadArena";
import Notes from "./Notes";
import { Route, Link } from "react-router-dom";

const ttest = () => {
  return (
    <div css={{ height: 200, width: 200, padding: 50 }}>
      <Icon name="hotel" />
    </div>
  );
};
class InfoStorageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
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
        <Link to="/infoStorage/ttest">
          <Icon name="hand peace outline" size="large" />
        </Link>
        <Route exact path="/infoStorage/ttest" component={ttest} />
      </>
    );
  }
}

export default InfoStorageContainer;
