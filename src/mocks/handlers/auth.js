import { rest } from "msw";
import { existingUser, userJwt } from "../data/user.mock";

const BASE_URL = `${process.env.REACT_APP_BASE_ENDPOINT}/api/v1`;

export const signupMock = rest.post(`${BASE_URL}/signup`, (req, res, ctx) => {
  const result = { message: "User cretaed succefully", user: existingUser, token: userJwt };
  return res(ctx.json(result));
});

export const authHandlers = [signupMock];
