import {
	getPokemonData,
	toggleIsCapturedState,
} from "../../services/pokemonServices";
import axios from "axios";
import { it, describe, expect, test, beforeEach, afterEach } from "vitest";
import {
	render,
	fireEvent,
	screen,
	waitFor,
	getByText,
	getByAltText,
} from "@testing-library/react";

vi.mock("axios");

afterEach(() => {
	axios.get.mockReset();
});

describe("getPokemon", async () => {
	const mockPokemonData = [
		{
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
		},
		{
			id: 2,
			name: "Ivysaur",
			basicSprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
			detailedSprite:
				"https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
			abilityName1: "Overgrow",
			abilityName2: "Chlorophyll",
			hp: 60,
			attack: 62,
			defence: 63,
			specialAttack: 80,
			specialDefence: 80,
			speed: 60,
			caught: true,
		},
		{
			id: 3,
			name: "Venusaur",
			basicSprite:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
			detailedSprite:
				"https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
			abilityName1: "Overgrow",
			abilityName2: "Chlorophyll",
			hp: 80,
			attack: 82,
			defence: 83,
			specialAttack: 100,
			specialDefence: 100,
			speed: 80,
			caught: true,
		},
	];

	axios.get.mockResolvedValue({
		data: mockPokemonData,
	});

	const pokemon = await getPokemonData();

	it("The correct endpoint is called", () => {
		expect(axios.get).toHaveBeenCalledWith(
			"http://localhost:8080/api/pokemon/"
		);
	});

	it("The data returned is correct", () => {
		expect(pokemon).toStrictEqual(mockPokemonData);
	});
});

// This type of test is avoided in RTL as we are not checking what the user would see/do - I am better off just testing the onclick functionality of the pokeballs

// describe("toggleIsCapturedState", async () => {
// 	const mockSinglePokemonData = {
// 		id: 1,
// 		name: "Bulbasaur",
// 		basicSprite:
// 			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
// 		detailedSprite:
// 			"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
// 		abilityName1: "Overgrow",
// 		abilityName2: "Chlorophyll",
// 		hp: 45,
// 		attack: 49,
// 		defence: 49,
// 		specialAttack: 65,
// 		specialDefence: 65,
// 		speed: 45,
// 		caught: true,
// 	};

// 	axios.put.mockResolvedValue({
// 		data: mockSinglePokemonData,
// 	});

// 	const pokemon = await toggleIsCapturedState();

// 	const expectedToggledPokemonData = {
// 		id: 1,
// 		name: "Bulbasaur",
// 		basicSprite:
// 			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
// 		detailedSprite:
// 			"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
// 		abilityName1: "Overgrow",
// 		abilityName2: "Chlorophyll",
// 		hp: 45,
// 		attack: 49,
// 		defence: 49,
// 		specialAttack: 65,
// 		specialDefence: 65,
// 		speed: 45,
// 		caught: false,
// 	};

// 	it("asdas", () => {
// 		expect(pokemon).toStrictEqual(expectedToggledPokemonData);
// 	});
// });
