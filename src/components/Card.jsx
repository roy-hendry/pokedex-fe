function Card({ pokemonData, setSelectedPokemon }) {
	return (
		<div
			className="list-item"
			onClick={() => {
				setSelectedPokemon(pokemonData);
			}}
		>
			<div className="white-circle">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
					alt="pokeball"
				/>
			</div>
			<h2>{pokemonData.id}</h2>
			<br />
			<h2>{pokemonData.name}</h2>
			<div className="white-circle">
				<img src={pokemonData.basicSprite} alt={pokemonData.name} />
			</div>
		</div>
	);
}

export default Card;
