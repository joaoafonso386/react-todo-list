import "@testing-library/jest-dom";
import TodosPage from "../../views/TodosPage/TodosPage";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
const url = "http://localhost:3008/api/tasks";
const todos = Array(100).map((todo, id) => ({
  id,
  text: "Task",
  completed: true,
}));

it("Renders Todos by waiting for the api call", async () => {
  mock.onGet(url).reply(200, todos);
  render(<TodosPage />);

  const text = await screen.findByText("Task");
  const loading = screen.queryByText("Loading...");
  expect(text).toBeInTheDocument();
  expect(loading).toBeNull();
});
