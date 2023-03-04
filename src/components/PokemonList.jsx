import Card from "../components/Card";

function PokemonList({ pokemonData }) {
	console.log(pokemonData);
	return pokemonData.map((item) => {
		console.log(item.id);
		return (
			<div key={item.id}>
				<Card pokemonData={item} />
			</div>
		);
	});
}

export default PokemonList;
