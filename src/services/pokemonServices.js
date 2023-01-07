import axios from "axios";

export const getAllPokemon = async () => {
	const response = await axios.get(
		"https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
	);
	// console.log(response.data.results);
	getPokemonUrls(response.data.results);
	return response;
};

export const getPokemonUrls = async (pokemonArray) => {
	let pokemonUrls = [];
	for (let i = 0; i < pokemonArray.length; i++) {
		pokemonUrls.push(pokemonArray[i].url);
		console.log(pokemonArray);
	}
	console.log(pokemonUrls);
};
