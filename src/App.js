import InfoStorageContainer from "@app/infoStorage/components/InfoStorageContainer";
import HomePageContainer from "@app/homePage/components/HomePageContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import TabBar from "@common/TabBar";

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
