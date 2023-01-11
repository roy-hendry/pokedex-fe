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
		// console.log("let pokemonArray:");
		// console.log(pokemonArray);

		let pokemonUrls = [];
		for (let i = 0; i < pokemonArray.length; i++) {
			pokemonUrls.push(pokemonArray[i].url);
		}

		// console.log(response.data.results);
		// console.log("response.data");
		// console.log(response.data);
		getAllPokemon(response);

		return pokemonUrls;
	};

	const getAllPokemon = async (response) => {
		let tempArray = [];
		response.data.results.map(async (item) => {
			const result = await axios.get(item.url);
			tempArray.push(result.data);
			// result.sort((a, b) => (a.id > b.id ? 1 : -1));
			console.log(result);
			// setAllPokemonData(allPokemonData.map());
		});
		tempArray.sort((a, b) => (a.id > b.id ? 1 : -1));
		console.log("tempArray");
		console.log(tempArray);
	};

	useEffect(() => {
		getPokemonFunction();
		// console.log(allPokemonData);
	}, []);

	return (
		<>
			<h1>Landing Page!</h1>
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
