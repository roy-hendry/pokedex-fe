import Card from "../../components/Card";
import { it, describe, expect, test, beforeEach } from "vitest";
import {
	render,
	fireEvent,
	screen,
	waitFor,
	getByText,
	getByAltText,
} from "@testing-library/react";

describe("GIVEN Pokemon data with a true captured state; WHEN the pokemon Card is rendered; THEN the following elements will be shown", () => {
	const pokemonTestData = {
		id: 1,
		name: "Bulbasaur",
		basicSprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		detailedSprite:
			"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
		abilityName1: "Overgrow",
		abilityName2: "Chlorophyll",
		hp: 45,
		attack: 49,
		defence: 49,
		specialAttack: 65,
		specialDefence: 65,
		speed: 45,
		caught: true,
	};

	it("ID", () => {
		render(<Card pokemonData={pokemonTestData} />);
		expect(screen.getByText("1")).toBeInTheDocument();
	});

	it("Name", () => {
		render(<Card pokemonData={pokemonTestData} />);
		expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
	});

	it("Alt pokemon image name", () => {
		render(<Card pokemonData={pokemonTestData} />);
		expect(screen.getByAltText("Bulbasaur")).toBeInTheDocument();
	});

	it("Alt pokeball image name", () => {
		render(<Card pokemonData={pokemonTestData} />);
		expect(screen.getByAltText("pokeball")).toBeInTheDocument();
	});
});

it("GIVEN Pokemon data with a false captured state; WHEN the pokemon Card is rendered; THEN the pokeball icon won't be shown", () => {
	const pokemonTestData = {
		id: 1,
		name: "Bulbasaur",
		basicSprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		detailedSprite:
			"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
		abilityName1: "Overgrow",
		abilityName2: "Chlorophyll",
		hp: 45,
		attack: 49,
		defence: 49,
		specialAttack: 65,
		specialDefence: 65,
		speed: 45,
		caught: false,
	};

	const card = render(<Card pokemonData={pokemonTestData} />);
	const pokeballImage = card.container.querySelector("#pokeball-image");

	expect(pokeballImage).not.toBeInTheDocument();
});