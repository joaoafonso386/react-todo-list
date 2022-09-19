import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

describe("Layout", () => {
  it("Should render Layout", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    );
    const title = screen.queryAllByText("Welcome to this todo list app!"); //array
    expect(title).toHaveLength(1); //if has length its present
    expect(screen).toMatchSnapshot();
  });
});
