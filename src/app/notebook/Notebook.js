import { useState, useCallback } from "react";

import { Header, Icon, Segment } from "semantic-ui-react";

const Dropzone = () => (
	<div
		onDrop={(e) => {
			e.preventDefault();
			const formData = new FormData();
			formData.append("file", e.dataTransfer.files[0]);
		}}>
		<Segment placeholder>
			<Header icon>
				<Icon name="pdf file outline" />
				Add informatic here
			</Header>
		</Segment>
	</div>
);

const Notebook = () => {
	const [entered, setEntered] = useState(false);

	const handleDragEnter = useCallback((e) => {
		setEntered(true);
	});

	const handleMouseLeave = useCallback((e) => {
		if (entered) setEntered(false);
	});

	return (
		<div
			onDragEnter={(e) => handleDragEnter(e)}
			onDragOver={(e) => e.preventDefault()}
			onMouseLeave={handleMouseLeave}
			css={{
				minHeight: 150,
				minWidth: 300,
				background: "#6c6f76",
				marginTop: 200,
			}}>
			{entered ? (
				<Dropzone />
			) : (
				<textarea css={{ width: "100%", height: "100%" }} />
			)}
		</div>
	);
};

export default Notebook;
