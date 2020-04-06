import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
// import "semantic-ui-css/semantic.min.css";
import InfoStorageContainer from "src/app/infoStorage/components/InfoStorageContainer";
import HomePageContainer from "src/app/homePage/components/HomePageContainer";
import NoteTaker from "src/app/noteTaker/components/NoteTaker";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TabBar from "src/common/TabBar";

const pages = [
  { heading: "Home", path: "/", icon: "home" },
  { heading: "Info Manager", path: "/infoStorage", icon: "clipboard" },
  { heading: "Study", path: "/noteTaker", icon: "pencil alternate" },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <TabBar pages={pages} />
          <Switch>
            <Route exact path="/" component={HomePageContainer} />
            <Route exact path="/infoStorage" component={InfoStorageContainer} />
            <Route exact path="/noteTaker" component={NoteTaker} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
