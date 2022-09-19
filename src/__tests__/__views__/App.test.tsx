import { render, screen } from "@testing-library/react";
import App from "../../views/App/App";

describe("App Page", () => {
  it("Renders correctly", () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
});
