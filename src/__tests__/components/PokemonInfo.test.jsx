import PokemonInfo from "../../components/PokemonInfo";
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

describe("GIVEN Pokemon data with two abilities; WHEN we have rendered PokemonInfo; THEN it's fields will be shown", () => {
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
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("1")).toBeInTheDocument();
	});

	it("Name", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
	});

	it("Ability1", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("Overgrow")).toBeInTheDocument();
	});

	it("Ability2", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("Chlorophyll")).toBeInTheDocument();
	});

	it("HP", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("HP: 045")).toBeInTheDocument();
	});

	it("Attack", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("Attack: 049")).toBeInTheDocument();
	});

	it("Defence", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("Defence: 049")).toBeInTheDocument();
	});

	it("Special-Attack", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("Special-Attack: 065")).toBeInTheDocument();
	});

	it("Special-Defence", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("Special-Defence: 065")).toBeInTheDocument();
	});

	it("Speed", () => {
		render(<PokemonInfo pokemonData={pokemonTestData} />);
		expect(screen.getByText("Speed: 045")).toBeInTheDocument();
	});
});

it("WHEN rendering PokemonInfo; GIVEN Pokemon data with only one ability; THEN only one ability will be shown", () => {
	const pokemonTestData = {
		id: 11,
		name: "Metapod",
		basicSprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
		detailedSprite:
			"https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
		abilityName1: "Shed-skin",
		abilityName2: null,
		hp: 50,
		attack: 20,
		defence: 55,
		specialAttack: 25,
		specialDefence: 25,
		speed: 30,
		caught: false,
	};

	const pokemonInfo = render(<PokemonInfo pokemonData={pokemonTestData} />);

	const abilityNameTwo =
		pokemonInfo.container.getElementsByClassName("group");

	expect(abilityNameTwo.length).toBe(1);
});