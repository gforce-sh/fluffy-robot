import { useState, useCallback } from "react";
import { withRouter } from "react-router-dom";

import { Menu, Icon } from "semantic-ui-react";

const Navigate = ({ history, location }) => {
	const [dim, setDim] = useState(true);

	const goToPage = useCallback((path) => history.push(path), [history]);

	return (
		<div
			css={{
				opacity: dim ? 0.4 : 1,
				position: "absolute",
				top: 0,
				right: 0,
				padding: 20,
				transition: "opacity 0.2s ease-in-out",
				zIndex: 3,
			}}
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
