import axios from "axios";

export const getPokemonData = async () => {
	const nameResponse = await axios.get("http://localhost:8080/api/pokemon/");

	return nameResponse.data;
};