import Card from "../components/Card";

function PokemonList({ pokemonData }) {
	return pokemonData.map((item) => (
		<div key={item.id}>
			<Card pokemonData={item} />
		</div>
	));
}

export default PokemonList;
