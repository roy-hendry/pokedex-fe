import Card from "../components/Card";

function PokemonList({ pokemonSubset, setSelectedPokemon }) {
	return pokemonSubset.map((item) => (
		<div key={item.id}>
			<Card pokemonData={item} setSelectedPokemon={setSelectedPokemon} />
		</div>
	));
}

export default PokemonList;
