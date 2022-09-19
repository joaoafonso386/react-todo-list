import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

describe("Layout", () => {
  it("Should render Layout with title", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    );
    const title = screen.queryAllByText("Welcome to this todo list app!");
    expect(title).toHaveLength(1);
    expect(screen).toMatchSnapshot();
  });
});
