import { rest } from "msw";

export const handlers = [
	// params: request, response, context
	rest.get("http://localhost:8080/api/pokemon/", (req, res, ctx) => {
		return res(
			ctx.json([
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
			])
		);
	}),
];
