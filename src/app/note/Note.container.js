import Note from "./Note";
import { useNote } from "./api/Note.api";

const NoteContainer = () => {
	const { data, isFetching, remove } = useNote();
	return (
		<Note
			joke={
				data?.setup ? `${data.setup} \n ${data.delivery}` : data?.joke || ""
			}
			loading={isFetching}
			remove={remove}
		/>
	);
};

export default NoteContainer;
