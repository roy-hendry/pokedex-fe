function PokemonInfo({ pokemonData }) {
	let sqlInsertStatement = "";
	const n =
		pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

	sqlInsertStatement += "'" + n + "',\n";
	sqlInsertStatement += "'" + pokemonData.sprites.front_default + "',\n";
	const a =
		pokemonData.abilities[0].ability.name.charAt(0).toUpperCase() +
		pokemonData.abilities[0].ability.name.slice(1);
	sqlInsertStatement += "'" + a + "',\n";
	if (pokemonData.abilities.length > 1) {
		const b =
			pokemonData.abilities[1].ability.name.charAt(0).toUpperCase() +
			pokemonData.abilities[1].ability.name.slice(1);
		sqlInsertStatement += "'" + b + "',\n";
	} else {
		sqlInsertStatement += ",\n";
	}
	sqlInsertStatement += pokemonData.stats[0].base_stat + ",\n";
	sqlInsertStatement += pokemonData.stats[1].base_stat + ",\n";
	sqlInsertStatement += pokemonData.stats[2].base_stat + ",\n";
	sqlInsertStatement += pokemonData.stats[3].base_stat + ",\n";
	sqlInsertStatement += pokemonData.stats[4].base_stat + ",\n";
	sqlInsertStatement += pokemonData.stats[5].base_stat;

	// console.log(sqlInsertStatement);

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
					{pokemonData.abilities.length > 1 && (
						<div className="group">
							<h2>{pokemonData.abilities[1].ability.name}</h2>
						</div>
					)}
				</div>
				<div className="base-stat">
					<h3>
						{"HP"} : {pokemonData.stats[0].base_stat}
					</h3>
					<h3>
						{"Attack"} : {pokemonData.stats[1].base_stat}
					</h3>
					<h3>
						{"Defence"} : {pokemonData.stats[2].base_stat}
					</h3>
					<h3>
						{"Special-Attack"} : {pokemonData.stats[3].base_stat}
					</h3>
					<h3>
						{"Special-Defence"} : {pokemonData.stats[4].base_stat}
					</h3>
					<h3>
						{"Speed"} : {pokemonData.stats[5].base_stat}
					</h3>
				</div>
			</div>
		)
	);
}

export default PokemonInfo;
