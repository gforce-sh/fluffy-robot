import { useState, useEffect } from "react";

import { Loader } from "@common";

const Note = ({ joke, loading }) => {
	const defaultNoteWidth = 475;
	const defaultNoteHeight = 450;
	const [text, setText] = useState("");
	useEffect(() => {
		setText(joke);
	}, [joke]);

	return (
		<div>
			{loading && (
				<div
					css={{ position: "absolute", left: "calc(50% - 50px)", top: "20%" }}>
					<Loader size="small" text="Loading" />
				</div>
			)}
			<textarea
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Add your notes here..."
				css={{
					width: defaultNoteWidth,
					height: defaultNoteHeight,
					resize: "none",
					outline: "none",
					lineHeight: 1.5,
					padding: 20,
					position: "relative",
					border: "1px solid #E8E8E8",
					fontSize: "1em",
					borderBottomRightRadius: "60px 5px",
					display: "inline-block",
					background: "#ffff88" /* Old browsers */,
					background:
						"-moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%)" /* FF3.6+ */,
					background:
						"-webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6))" /* Chrome,Safari4+ */,
					background:
						"-webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%)" /* Chrome10+,Safari5.1+ */,
					background:
						"-o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%)" /* Opera 11.10+ */,
					background:
						"-ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%)" /* IE10+ */,
					background:
						"linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%)" /* W3C */,
					filter:
						"progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 )",
				}}
			/>
		</div>
	);
};

export default Note;
