import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Menu from "./Menu";

// Mock the useAuth0 hook
jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({ loginWithRedirect: jest.fn() })
}));

describe("Menu component", () => {
  it("renders app name and login button", () => {
    render(<Menu />);
    expect(screen.getByText("Some awesome app")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
});
