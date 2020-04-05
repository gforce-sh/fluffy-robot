import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
// import "semantic-ui-css/semantic.min.css";
import InfoStorageContainer from "src/app/infoStorage/components/InfoStorageContainer";
import HomePageContainer from "src/app/homePage/components/HomePageContainer";
import NoteTaker from "src/app/noteTaker/components/NoteTaker";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import TabBar from "src/app/tabBar/TabBar";

const pages = [
  { heading: "Home", path: "/" },
  { heading: "Info Manager", path: "/infoStorage" },
  { heading: "Study", path: "/noteTaker" }
];
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TabBar pages={pages} />
        </div>
        <Switch>
          <div className="App">
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/infoStorage" component={InfoStorageContainer} />
            <Route exact path="/noteTaker" component={NoteTaker} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
