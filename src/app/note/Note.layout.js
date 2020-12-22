import NoteContainer from "./Note.container";
import { Button } from "semantic-ui-react";

const NoteLayout = () => {
	return (
		<div css={{ display: "flex", justifyContent: "center", paddingTop: 100 }}>
			<NoteContainer />
			<div css={{ margin: 20 }}>
				<Button color="teal" content="Save" />
			</div>
		</div>
	);
};

export default NoteLayout;
