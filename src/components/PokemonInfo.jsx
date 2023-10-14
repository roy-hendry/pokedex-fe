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
				<img src={pokemonData.detailedSprite} alt="Pokemon" />
				<div className="abilities">
					<div className="group">
						<h2>{pokemonData.abilityName1}</h2>
					</div>
					{pokemonData.abilityName2 !== null && (
						<div className="group">
							<h2>{pokemonData.abilityName2}</h2>
						</div>
					)}
				</div>
				<div className="base-stat">
					<h3>
						{"HP"}: {pokemonData.hp.toString().padStart(3, "0")}
					</h3>
					<h3>
						{"Attack"}:{" "}
						{pokemonData.attack.toString().padStart(3, "0")}
					</h3>
					<h3>
						{"Defence"}:{" "}
						{pokemonData.defence.toString().padStart(3, "0")}
					</h3>
					<h3>
						{"Special-Attack"}:{" "}
						{pokemonData.specialAttack.toString().padStart(3, "0")}
					</h3>
					<h3>
						{"Special-Defence"}:{" "}
						{pokemonData.specialDefence.toString().padStart(3, "0")}
					</h3>
					<h3>
						{"Speed"}:{" "}
						{pokemonData.speed.toString().padStart(3, "0")}
					</h3>
				</div>
			</div>
		)
	);
}

export default PokemonInfo;
