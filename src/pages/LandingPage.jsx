import axios from "axios";
import { useEffect, useState } from "react";
import {
	getPokemonData,
	grabAllPokemonData,
} from "../services/pokemonServices";
import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";

const LandingPage = () => {
	const [loading, setLoading] = useState(false);
	// const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=150");
	// const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
	const [allPokemonData, setAllPokemonData] = useState([]);

	const getPokemonData = async () => {
		const nameResponse = await axios.get(
			"https://pokeapi.co/api/v2/pokemon?limit=151"
		);
		const pokemonCompleteList = [];
		const nameList = nameResponse.data.results;

		for (let i = 0; i < nameList.length; i++) {
			const pokemonResponse = await axios.get(nameList[i].url);

			pokemonCompleteList.push(pokemonResponse.data);
		}
		console.log(pokemonCompleteList);
		setAllPokemonData(pokemonCompleteList);
		setLoading(false);
	};

	useEffect(() => {
		setLoading(true);
		getPokemonData();
		// setAllPokemonData([]);
		// tempMain();

		// getPokemonFunction();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1>Landing Page!</h1>
			{!loading && (
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
			)}
		</>
	);
};

export default LandingPage;
