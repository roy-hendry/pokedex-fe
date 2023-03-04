import axios from "axios";

export const getPokemonData = async () => {
	const nameResponse = await axios.get(
		"https://pokeapi.co/api/v2/pokemon?limit=151"
	);
	const pokemonCompleteList = [];
	const nameList = nameResponse.data.results;

	for (let i = 0; i < nameList.length; i++) {
		const pokemonResponse = await axios.get(nameList[i].url);
		pokemonCompleteList.push(pokemonResponse.data);
	}
	return pokemonCompleteList;
};