import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ErrorBoundary from "./app/errorboundary/ErrorBoundary";
import Navigate from "./app/navigate/Navigate";
import NoteLayout from "./app/note/Note.layout";

const App = () => {
	return (
		<div className="App">
			<ErrorBoundary>
				<Router>
					<Navigate />
					<Switch>
						<Route exact path="/" component={NoteLayout} />
					</Switch>
				</Router>
			</ErrorBoundary>
		</div>
	);
};

export default App;
