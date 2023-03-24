function Card({ pokemonData, setSelectedPokemon }) {
	return (
		<div
			className="card"
			onClick={() => {
				setSelectedPokemon(pokemonData);
			}}
		>
			<h2>{pokemonData.id}</h2>
			<br />
			<h2>{pokemonData.name}</h2>
			<img src={pokemonData.sprites.front_default} alt="Pokemon" />
		</div>
	);
}

export default Card;
