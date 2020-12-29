import { useCallback, useState, useEffect } from "react";

import Note from "./Note";
import { useNote } from "./api/Note.api";

const NoteContainer = () => {
	const [textInState, setTextInState] = useState("");
	const { getNote = {}, editNote = {} } = useNote({
		text: textInState,
	});
	const { data, isFetching, remove, isError } = getNote;
	const { mutate, isSuccess, isError: isEditError, isLoading } = editNote;

	useEffect(() => {
		setTextInState(data?.text || "");
	}, [data, setTextInState]);

	useEffect(() => {
		return () => {
			remove();
		};
	}, []);

	const onEditNote = useCallback(() => {
		mutate({ text: textInState });
	}, [mutate, textInState]);

	return (
		<Note
			textInState={textInState}
			loading={isFetching || isLoading}
			errorOccured={isError || isEditError}
			setTextInState={setTextInState}
			onEditNote={onEditNote}
		/>
	);
};

export default NoteContainer;
