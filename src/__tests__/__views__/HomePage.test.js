import { render, screen } from "@testing-library/react";
import HomePage from "../../views/HomePage/HomePage";

describe("Home Page", () => {
  it("Renders correctly", () => {
    render(<HomePage />);
    expect(screen).toMatchSnapshot();
  });
});
