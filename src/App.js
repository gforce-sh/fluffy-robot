// The following import structure is adhered to in all files.
// React and its ecosystem
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

// Third-party packages
import { QueryClient, QueryClientProvider } from "react-query";
import { Global, css } from "@emotion/react";

// Local components
import ErrorBoundary from "./app/errorboundary/ErrorBoundary";
import Navigate from "./app/navigate/Navigate";
import NoteLayout from "./app/note/Note.layout";
import NoteBook from "./app/notebook/Notebook";
import { Loader } from "./common";

const queryClient = new QueryClient();

const App = () => {
	return (
		<div css={{ display: "flex", justifyContent: "center" }} className="App">
			<div css={{ width: 1200 }}>
				<ErrorBoundary>
					<Global
						styles={css`
							body {
								background: #f3f3f3;
							}
						`}
					/>
					<QueryClientProvider client={queryClient}>
						<Router>
							<Navigate />
							<Switch>
								<Route
									exact
									path="/"
									render={() => <Loader size="medium" text="Loading" />}
								/>
								<Route exact path="/notes" component={NoteLayout} />
								<Route exact path="/study" component={NoteBook} />
							</Switch>
						</Router>
					</QueryClientProvider>
				</ErrorBoundary>
			</div>
		</div>
	);
};

export default App;
