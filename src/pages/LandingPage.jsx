import axios from "axios";
import { useEffect, useState } from "react";
// import { getAllPokemon, getPokemonUrls } from "../services/pokemonServices";
import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";

const LandingPage = () => {
	const [loading, setLoading] = useState(false);
	// const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=9");
	const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
	const [allPokemonData, setAllPokemonData] = useState([]);

	const getPokemonFunction = async () => {
		setLoading(true);
		const response = await axios.get(url);

		grabAllPokemonData(response.data.results);
	};

	const grabAllPokemonData = async (pokemonArray) => {
		pokemonArray.map(async (item) => {
			const result = await axios.get(item.url);
			setAllPokemonData((state) => {
				console.log("state.length");
				console.log(state.length);

				// This is made purely to fix the mounting issue where calls are made twice - Only really an issue in React Strictmode
				if (state.length >= pokemonArray.length) {
					state.sort((a, b) => (a.id > b.id ? 1 : -1));
					return state;
				}
				state = [...state, result.data];

				// console.log("result.data");
				// console.log(result.data);
				state.sort((a, b) => (a.id > b.id ? 1 : -1));
				return state;
			});
		});
	};

	useEffect(() => {
		setAllPokemonData([]);
		getPokemonFunction();
		// console.log("allPokemonData");
		// console.log(allPokemonData);

		// console.log("allPokemonData[3]");
		// console.log(allPokemonData[3]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return (
		<>
			<h1>Landing Page!</h1>
			<div className="container">
				<div className="left-content">
					{allPokemonData.map((item) => {
						return (
							<div key={item.id}>
								<Card pokemonData={item} />
							</div>
						);
					})}
				</div>
				<div className="right-content">
					<PokemonInfo />
				</div>
			</div>
		</>
	);
};

export default LandingPage;
