import pokeball_icon from "../assets/poke_ball_icon.svg";

function Card({ pokemonData, setSelectedPokemon }) {
	return (
		<div
			className="list-item"
			onClick={() => {
				setSelectedPokemon(pokemonData);
			}}
		>
			<div className="white-circle">
				<img src={pokeball_icon} alt="pokeball" />
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
