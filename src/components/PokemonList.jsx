import Card from "../components/Card";

function PokemonList({ allPokemon, setSelectedPokemon }) {
	return allPokemon.map((item) => (
		<div key={item.id}>
			<Card pokemonData={item} setSelectedPokemon={setSelectedPokemon} />
		</div>
	));
}

export default PokemonList;
