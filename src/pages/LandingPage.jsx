import { useEffect, useState } from "react";
import { getPokemonData } from "../services/pokemonServices";
import PokemonInfo from "../components/PokemonInfo";
import PokemonList from "../components/PokemonList";
import { waitFor } from "@testing-library/react";
import { wait } from "@testing-library/user-event/dist/utils";

const LandingPage = () => {
	const [loading, setLoading] = useState(false);
	const [allPokemonData, setAllPokemonData] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [selectedPokemon, setSelectedPokemon] = useState();

	useEffect(() => {
		setLoading(true);
		getPokemonData().then((response) => {
			setAllPokemonData(response);
			setSelectedPokemon(response[2]);
			console.log(response[0]);
			setLoading(false);
		});
		// console.log(allPokemonData);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1>Landing Page!</h1>
			{!loading && (
				<div className="container">
					<div className="left-content">
						<PokemonList
							pokemonSubset={allPokemonData.slice(
								(pageNumber - 1) * 20,
								pageNumber * 20
							)}
						/>
						<div className="btn-group">
							{pageNumber > 1 && (
								<button
									onClick={() => {
										setPageNumber(pageNumber - 1);
									}}
								>
									Previous
								</button>
							)}

							{pageNumber < 8 && (
								<button
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
