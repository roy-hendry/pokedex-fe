function PokemonInfo() {
	return (
		<div className="card">
			<h1>Pokemon</h1>
			<img
				src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
				alt=""
			/>
			<div className="abilities">
				<div className="group">
					<h2>Ability 1</h2>
				</div>
				<div className="group">
					<h2>Ability 2</h2>
				</div>
			</div>
			<div className="base-stat">
				<h3>Stat 1</h3>
				<h3>Stat 2</h3>
				<h3>Stat 3</h3>
				<h3>Stat 4</h3>
			</div>
		</div>
	);
}

export default PokemonInfo;
