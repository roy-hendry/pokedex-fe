import { useEffect, useState } from "react";
import { getPokemonData } from "../services/pokemonServices";
import PokemonInfo from "../components/PokemonInfo";
import PokemonList from "../components/PokemonList";
import pokemonLogo from "../assets/pokemon_logo.png";

const LandingPage = () => {
	const [loading, setLoading] = useState(true);
	const [allPokemonData, setAllPokemonData] = useState([]);
	// const [pageNumber, setPageNumber] = useState(1);
	const [selectedPokemon, setSelectedPokemon] = useState();

	useEffect(() => {
		getPokemonData().then((response) => {
			setAllPokemonData(response);
			setSelectedPokemon(response[0]);
			setLoading(false);
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<img className="pokemonLogo" src={pokemonLogo} alt="pokemonLogo" />
			{loading && <p>Loading...</p>}

			{!loading && (
				<div className="container">
					<div className="pokemon-list-container">
						<PokemonList
							allPokemon={allPokemonData}
							setSelectedPokemon={setSelectedPokemon}
						/>
					</div>
					<div className="info-container">
						<PokemonInfo pokemonData={selectedPokemon} />
					</div>
				</div>
			)}
		</>
	);
};

export default LandingPage;
