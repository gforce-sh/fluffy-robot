import React from "react";
import "semantic-ui-css/semantic.min.css";
import InfoStorageContainer from "src/app/infoStorage/components/InfoStorageContainer";
import Notes from "src/app/infoStorage/components/Notes";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/infoStorage" component={InfoStorageContainer} />
          <Route exact path="/" component={Notes} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
