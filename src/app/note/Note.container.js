import Note from "./Note";
import { useNote } from "./api/Note.api";

const NoteContainer = () => {
	const { data } = useNote();
	console.log("data", data);
	return (
		<Note
			joke={
				data?.setup ? `${data.setup} \n ${data.delivery}` : data?.joke || ""
			}
		/>
	);
};

export default NoteContainer;
