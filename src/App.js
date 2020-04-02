import InfoStorageContainer from "@app/infoStorage/components/InfoStorageContainer";
import HomePageContainer from "@app/homePage/components/HomePageContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Grid
              container
              spacing={1}
              css={{ background: "whitesmoke" }}
              className="NavBar"
              justify="flex-start">
              {[
                { path: "/", name: "Home" },
                { path: "/infoStorage", name: "Info Storage" }
              ].map(page => (
                <Grid item xs="auto" key={page.name}>
                  <Link to={page.path}>
                    <Label
                      color="grey"
                      css={{ color: "white" }}
                      content={page.name}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/infoStorage" component={InfoStorageContainer} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
