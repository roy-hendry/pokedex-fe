import pokeball_icon from "../assets/poke_ball_icon.svg";
import { toggleIsCapturedState } from "../services/pokemonServices";

// As of current clicking the white circle calls the backend's toggleIsCapturedState method
// The main issue is that it doesn't reload anything
// Ideally I would want it to instantly show the change by reloading the check to show the pokeball
// This will most likely be done via a state change whenever the call is made locally as it will stay in sync - unless I am able to find a better way

function Card({ pokemonData, setSelectedPokemon }) {
	return (
		<div
			className="list-item"
			onClick={() => {
				setSelectedPokemon(pokemonData);
			}}
		>
			<div
				className="white-circle"
				onClick={() => {
					toggleIsCapturedState(pokemonData);
				}}
			>
				{pokemonData.caught && (
					<img
						id="pokeball-image"
						src={pokeball_icon}
						alt="pokeball"
					/>
				)}
			</div>
			<h2 id="pokemonListId">{pokemonData.id}</h2>
			<h2 id="pokemonListName"> {pokemonData.name}</h2>
			<div className="white-circle">
				<img
					id="pokemon-list-image"
					src={pokemonData.basicSprite}
					alt={pokemonData.name}
				/>
			</div>
		</div>
	);
}

export default Card;
