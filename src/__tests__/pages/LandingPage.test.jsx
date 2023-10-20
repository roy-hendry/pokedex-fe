import LandingPage from "../../pages/LandingPage";
import { it, describe, expect, test, beforeEach, afterEach } from "vitest";
import {
	render,
	fireEvent,
	screen,
	waitFor,
	getByText,
	getByAltText,
} from "@testing-library/react";

test("GIVEN pokemon data is returned from service call; WHEN rendering LandingPage; THEN pokemonLogo is rendered", () => {
	render(<LandingPage />);

	expect(screen.getByAltText("pokemonLogo")).toBeInTheDocument();
});
