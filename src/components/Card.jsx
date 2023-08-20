function Card({ pokemonData, setSelectedPokemon }) {
	return (
		<div
			className="list-item"
			onClick={() => {
				setSelectedPokemon(pokemonData);
			}}
		>
			<h2>{pokemonData.id}</h2>
			<br />
			<h2>{pokemonData.name}</h2>
			<img src={pokemonData.basicSprite} alt="Pokemon" />
		</div>
	);
}

export default Card;
