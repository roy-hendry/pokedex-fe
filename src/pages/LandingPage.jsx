import { useEffect, useState } from "react";
import { getAllPokemon } from "../services/pokemonServices";
import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";

const LandingPage = () => {
	const [loading, setLoading] = useState(false);

	const grabEmAll = async () => {
		setLoading(true);
		getAllPokemon();
	};

	useEffect(() => {
		grabEmAll();
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
