import { render, screen } from "@testing-library/react";
import App from "../../views/App/App";

it("Home Page Renders correctly", () => {
  render(<App />);
  expect(screen).toMatchSnapshot();
});
