import { useState } from "react";
import { withRouter } from "react-router-dom";

import { Menu, Icon } from "semantic-ui-react";

const Navigate = ({ history, location }) => {
	const [dim, setDim] = useState(true);

	const goToPage = (path) => history.push(path);

	return (
		<div
			css={{ opacity: dim ? 0.4 : 1, position: "absolute", top: 20, right: 20 }}
			onMouseEnter={() => setDim(false)}
			onMouseLeave={() => setDim(true)}>
			<Menu compact icon="labeled" size="tiny">
				<Menu.Item
					name="home"
					active={location.pathname === "/"}
					onClick={() => goToPage("/")}>
					<Icon name="home" />
					Home
				</Menu.Item>

				<Menu.Item
					name="sticky note"
					active={location.pathname === "/notes"}
					onClick={() => goToPage("/notes")}>
					<Icon name="sticky note" />
					Notes
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default withRouter(Navigate);
