function PokemonInfo({ pokemonData }) {
	return (
		pokemonData && (
			<div className="card">
				<div>
					<h1>{pokemonData.id}</h1>
					<br />
					<br />
					<h1>{pokemonData.name}</h1>
				</div>
				<img src={pokemonData.sprites.front_default} alt="Pokemon" />
				<div className="abilities">
					<div className="group">
						<h2>{pokemonData.abilities[0].ability.name}</h2>
					</div>
					<div className="group">
						<h2>{pokemonData.abilities[1].ability.name}</h2>
					</div>
				</div>
				<div className="base-stat">
					<h3>
						{pokemonData.stats[0].stat.name} :{" "}
						{pokemonData.stats[0].base_stat}
					</h3>
					<h3>
						{pokemonData.stats[1].stat.name} :{" "}
						{pokemonData.stats[1].base_stat}
					</h3>
					<h3>
						{pokemonData.stats[2].stat.name} :{" "}
						{pokemonData.stats[2].base_stat}
					</h3>
					<h3>
						{pokemonData.stats[3].stat.name} :{" "}
						{pokemonData.stats[3].base_stat}
					</h3>
					<h3>
						{pokemonData.stats[4].stat.name} :{" "}
						{pokemonData.stats[4].base_stat}
					</h3>
					<h3>
						{pokemonData.stats[5].stat.name} :{" "}
						{pokemonData.stats[5].base_stat}
					</h3>
				</div>
			</div>
		)
	);
}

export default PokemonInfo;
