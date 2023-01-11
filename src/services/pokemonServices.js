import axios from "axios";

export const getAllPokemon = async () => {
	const response = await axios.get(
		"https://pokeapi.co/api/v2/pokemon?limit=9"
	);

	const pokemonArray = response.data.results;

	let pokemonUrls = [];
	for (let i = 0; i < pokemonArray.length; i++) {
		pokemonUrls.push(pokemonArray[i].url);
		// console.log(pokemonArray[i].url);
	}

	return pokemonUrls;
};

export const getPokemonUrls = async () => {
	let pokemonUrls = [];
	const pokemonArray = getAllPokemon();
	console.log(getAllPokemon());
	for (let i = 0; i < pokemonArray.length; i++) {
		pokemonUrls.push(pokemonArray[i].url);
		// console.log(pokemonArray);
	}
	// console.log(pokemonUrls);
	// console.log(getAllPokemon());
};
