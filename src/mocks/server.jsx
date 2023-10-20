import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// This configures a rest mocking server with the given request handlers
export const server = setupServer(...handlers);
