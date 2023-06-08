import { setupServer } from "msw/node";
import { authHandlers } from "./handlers/auth";
// sertup request interceptors using given handlers
export const server = setupServer(...authHandlers);
