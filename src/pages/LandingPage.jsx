import Card from "../components/Card";
import PokemonInfo from "../components/PokemonInfo";

function LandingPage() {
	return (
		<>
			<h1>Landing Page!</h1>
			<div className="container">
				<div className="left-content">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div className="right-content">
					<PokemonInfo />
				</div>
			</div>
		</>
	);
}

export default LandingPage;
