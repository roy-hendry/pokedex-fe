function Card({ pokemonId, pokemonName, spriteUrl }) {
	return (
		<div className="card">
			<h2>{pokemonId}</h2>
			<h2>{pokemonName}</h2>
			<img src={spriteUrl} alt="" />
		</div>
	);
}

export default Card;
