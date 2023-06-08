import { server } from "../../../mocks/server";
import { render, screen } from "../../../test.utils";
import Register from "./Register";

describe("Register", () => {
  it("signup form should have its labels", () => {
    render(<Register />);
    const usernameLabel = screen.getByLabelText("Username");
    const emailLabel = screen.getByLabelText("Email");
    const passwordLabel = screen.getByLabelText("Password");
    expect(usernameLabel).toBeInTheDocument();
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });
});
