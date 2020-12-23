import { useQuery } from "react-query";

import { httpGet } from "@common/api";

const useQueryOptions = {
	refetchOnWindowFocus: false,
	// staleTime: 300000,
};

export const useNote = () => {
	return useQuery(
		"addJoke",
		() =>
			fetch(
				"https://sv443.net/jokeapi/v2/joke/Programming,Miscellaneous,Dark,Pun"
			).then((res) => res.json()),
		useQueryOptions
	);
};
