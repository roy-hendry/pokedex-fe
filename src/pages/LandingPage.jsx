import axios from "axios";
import { useEffect, useState } from "react";
// import { getAllPokemon, getPokemonUrls } from "../services/pokemonServices";
import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";

const LandingPage = () => {
	const [loading, setLoading] = useState(false);
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=9");
	const [allPokemonData, setAllPokemonData] = useState([]);
	const [allPokemonSprites, setAllPokemonSprites] = useState([]);

	const getPokemonFunction = async () => {
		setLoading(true);
		// setPokemonArray(getAllPokemon());
		// console.log(pokemonArray);
		const response = await axios.get(url);

		let pokemonArray = response.data.results;

		let pokemonUrls = [];
		for (let i = 0; i < pokemonArray.length; i++) {
			pokemonUrls.push(pokemonArray[i].url);
		}
		grabAllPokemonData(pokemonArray);

		return pokemonUrls;
	};

	const grabAllPokemonData = async (pokemonArray) => {
		let tempArray = [];
		pokemonArray.map(async (pokemon) => {
			const result = await axios.get(pokemon.url);
			tempArray.push(result.data);
			// console.log(result);
			// setAllPokemonData(allPokemonData.map());
		});
		// tempArray.sort((a, b) => (a.id > b.id ? 1 : -1));

		// console.log("tempArray");
		// console.log(tempArray);

		setAllPokemonData(tempArray);

		console.log("allPokemonData");
		console.log(allPokemonData[0]);

		getPokemonSprites(allPokemonData);
	};

	const getPokemonSprites = (allPokemonData) => {
		let tempArray = [];
		for (let i = 0; i < allPokemonData.length; i++) {
			tempArray.push(allPokemonData[i].sprites.front_default);
		}
		setAllPokemonSprites(tempArray);
		console.log(tempArray);
	};

	useEffect(() => {
		getPokemonFunction();
		console.log(allPokemonData[0]);
	}, []);

	return (
		<>
			<h1>Landing Page!</h1>
			<h1>{allPokemonSprites[0]}</h1>
			{/* <h1>{allPokemonData.name}</h1> */}
			<div className="container">
				<div className="left-content">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="right-content">
					<PokemonInfo />
				</div>
			</div>
		</>
	);
};

export default LandingPage;
