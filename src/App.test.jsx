import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Sign In button on AuthPage", () => {
  render(<App />);

  // Get the specific button element instead of any 'Sign In' text
  const buttonElement = screen.getByRole("button", { name: /sign in/i });
  expect(buttonElement).toBeInTheDocument();
});
