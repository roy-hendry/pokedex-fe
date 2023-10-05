import { it, describe, expect, test } from "vitest";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import LandingPage from "../../pages/LandingPage";

it("The test runs", () => {
	expect(true).toBe(true);
});

describe("Some description", () => {
	it("should render", () => {
		render(<LandingPage />);
	});
});
