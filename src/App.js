// The following import structure is adhered to in all files.
// React and its ecosystem
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Third-party packages
import { QueryClient, QueryClientProvider } from "react-query";

// Local components
import ErrorBoundary from "./app/errorboundary/ErrorBoundary";
import Navigate from "./app/navigate/Navigate";
import NoteLayout from "./app/note/Note.layout";

const queryClient = new QueryClient();

const App = () => {
	return (
		<div className="App">
			<ErrorBoundary>
				<QueryClientProvider client={queryClient}>
					<Router>
						<Navigate />
						<Switch>
							<Route exact path="/" component={NoteLayout} />
						</Switch>
					</Router>
				</QueryClientProvider>
			</ErrorBoundary>
		</div>
	);
};

export default App;
