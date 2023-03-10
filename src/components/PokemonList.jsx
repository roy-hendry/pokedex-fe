import Card from "../components/Card";

function PokemonList({ pokemonSubset }) {
	return pokemonSubset.map((item) => (
		<div key={item.id}>
			<Card pokemonData={item} />
		</div>
	));
}

export default PokemonList;
