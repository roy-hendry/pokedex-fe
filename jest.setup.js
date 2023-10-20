import "@testing-library/jest-dom";
import { server } from "./src/mocks/server.jsx";
import { afterAll, beforeAll } from "vitest";

console.log("-0-0-0-0-0-0-0-0-0-0-0-0-0");
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());