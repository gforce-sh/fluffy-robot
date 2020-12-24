import Note from "./Note";
import { useNote } from "./api/Note.api";

const NoteContainer = () => {
	const { data, isLoading } = useNote();
	return (
		<Note
			joke={
				data?.setup ? `${data.setup} \n ${data.delivery}` : data?.joke || ""
			}
			loading={isLoading}
		/>
	);
};

export default NoteContainer;
