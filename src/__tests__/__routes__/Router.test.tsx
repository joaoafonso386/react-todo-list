import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Router from "../../routes";

describe("Router Component", () => {
  it("App renders routes correctly and changes page on user click", async () => {
    render(<Router />);

    expect(screen.getByText("Approach")).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByText("Todo List"));

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });
});
