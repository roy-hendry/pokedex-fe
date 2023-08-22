import { useEffect, useState } from "react";
import { getPokemonData } from "../services/pokemonServices";
import PokemonInfo from "../components/PokemonInfo";
import PokemonList from "../components/PokemonList";
// import pokeball from "../assets/poke_ball_icon.svg";

const LandingPage = () => {
	const [loading, setLoading] = useState(true);
	const [allPokemonData, setAllPokemonData] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [selectedPokemon, setSelectedPokemon] = useState();

	useEffect(() => {
		getPokemonData().then((response) => {
			setAllPokemonData(response);
			setSelectedPokemon(response[2]);
			setLoading(false);
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1>Landing Page!</h1>
			{loading && <p>Loading...</p>}

			{!loading && (
				<div className="container">
					<div className="pokemon-list-container">
						<PokemonList
							pokemonSubset={allPokemonData.slice(
								(pageNumber - 1) * 20,
								pageNumber * 20
							)}
							setSelectedPokemon={setSelectedPokemon}
						/>
						<div className="btn-group">
							{pageNumber > 1 && (
								<button
									id="previousButton"
									onClick={() => {
										setPageNumber(pageNumber - 1);
									}}
								>
									Previous
								</button>
							)}

							{pageNumber < 8 && (
								<button
									id="nextButton"
									onClick={() => {
										setPageNumber(pageNumber + 1);
									}}
								>
									Next
								</button>
							)}
						</div>
					</div>
					<div className="right-content">
						<PokemonInfo pokemonData={selectedPokemon} />
					</div>
				</div>
			)}
		</>
	);
};

export default LandingPage;
