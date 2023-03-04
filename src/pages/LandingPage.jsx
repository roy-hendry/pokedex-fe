import { useEffect, useState } from "react";
import { getPokemonData } from "../services/pokemonServices";
import PokemonInfo from "../components/PokemonInfo";
import PokemonList from "../components/PokemonList";
import Card from "../components/Card";

const LandingPage = () => {
	const [loading, setLoading] = useState(false);
	const [allPokemonData, setAllPokemonData] = useState([]);

	useEffect(() => {
		setLoading(true);
		getPokemonData().then((response) => {
			setAllPokemonData(response);
			setLoading(false);
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<h1>Landing Page!</h1>
			{!loading && (
				<div className="container">
					<div className="left-content">
						{/* {allPokemonData.map((item) => {
							return (
								<div key={item.id}>
									<Card pokemonData={item} />
								</div>
							);
						})} */}
						{/* console.log(pokemonData) */}
						<PokemonList pokemonData={allPokemonData} />
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
