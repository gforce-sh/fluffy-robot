import ErrorBoundary from "./app/errorboundary/ErrorBoundary";
import NoteLayout from "./app/note/Note.layout";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="App">
				<ErrorBoundary>
					<Router>
						<Switch>
							<Route exact path="/" component={NoteLayout} />
						</Switch>
					</Router>
				</ErrorBoundary>
			</div>
		);
	}
}

export default App;
