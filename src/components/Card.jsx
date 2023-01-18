function Card({ pokemonData }) {
	return (
		<div className="card">
			<h2>{pokemonData.id}</h2>
			<h2>{pokemonData.name}</h2>
			<img src={pokemonData.sprites.front_default} alt="Pokemon" />
		</div>
	);
}

export default Card;
