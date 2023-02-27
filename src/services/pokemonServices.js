import axios from "axios";

// export const getPokemonData = async () => {
// 	const nameResponse = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151")
// 	const pokemonCompleteList = []

// 	const nameList = nameResponse.data.results

// 	for (let i = 0; i < nameList.length; i++) {
// 		const pokemonResponse = await axios.get(nameList[i].url)

// 		pokemonCompleteList.push(pokemonResponse.data)
// 	}

// 	// console.log(pokemonCompleteList)
// 	return pokemonCompleteList.data;
// }

// export const getPokemonFunction = async (url) => {
// 	const response = await axios.get(url);

// 	return response.data.results;
// };

// export const grabAllPokemonData = async (pokemonArray) => {
// 	pokemonArray.map(async (item) => {
// 		const result = await axios.get(item.url);
// 		let x = (state) => {
// 			// This is made purely to fix the mounting issue where calls are made twice - Only really an issue in React Strictmode
// 			if (state.length >= pokemonArray.length) {
// 				state.sort((a, b) => (a.id > b.id ? 1 : -1));
// 				return state;
// 			}
// 			state = [...state, result.data];

// 			state.sort((a, b) => (a.id > b.id ? 1 : -1));
// 			return state;
// 		};
// 	});
// };