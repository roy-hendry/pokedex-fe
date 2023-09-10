import axios from "axios";

export const getPokemonData = async () => {
	const nameResponse = await axios.get("http://localhost:8080/api/pokemon/");

	return nameResponse.data;
};

export const toggleIsCapturedState = async (pokemon) => {
	const toggleResponse = await axios.put(
		"http://localhost:8080/api/pokemon",
		pokemon
	);

	return toggleResponse.data;
};