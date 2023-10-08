import Card from "../../components/Card";
import { it, describe, expect, test } from "vitest";
import {
	render,
	fireEvent,
	screen,
	waitFor,
	getByText,
} from "@testing-library/react";

it("The test runs", () => {
	expect(true).toBe(true);
});

describe("GIVEN Pokemon data; WHEN we have rendered PokemonInfo; THEN it's fields will be shown", () => {
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

	// it("Ability1", () => {
	// 	render(<PokemonInfo pokemonData={pokemonTestData} />);
	// 	expect(screen.getByText("Overgrow")).toBeInTheDocument();
	// });

	// it("Ability2", () => {
	// 	render(<PokemonInfo pokemonData={pokemonTestData} />);
	// 	expect(screen.getByText("Chlorophyll")).toBeInTheDocument();
	// });

	// it("HP", () => {
	// 	render(<PokemonInfo pokemonData={pokemonTestData} />);
	// 	expect(screen.getByText("HP: 045")).toBeInTheDocument();
	// });

	// it("Attack", () => {
	// 	render(<PokemonInfo pokemonData={pokemonTestData} />);
	// 	expect(screen.getByText("Attack: 049")).toBeInTheDocument();
	// });

	// it("Defence", () => {
	// 	render(<PokemonInfo pokemonData={pokemonTestData} />);
	// 	expect(screen.getByText("Defence: 049")).toBeInTheDocument();
	// });

	// it("Special-Attack", () => {
	// 	render(<PokemonInfo pokemonData={pokemonTestData} />);
	// 	expect(screen.getByText("Special-Attack: 065")).toBeInTheDocument();
	// });

	// it("Special-Defence", () => {
	// 	render(<PokemonInfo pokemonData={pokemonTestData} />);
	// 	expect(screen.getByText("Special-Defence: 065")).toBeInTheDocument();
	// });

	// it("Speed", () => {
	// 	render(<PokemonInfo pokemonData={pokemonTestData} />);
	// 	expect(screen.getByText("Speed: 045")).toBeInTheDocument();
	// });
});
