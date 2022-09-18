import "@testing-library/jest-dom";
import TodosPage from "../../views/TodosPage/TodosPage";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
const url = "http://localhost:3008/api/tasks";
const todos = [
  {
    id: 0,
    text: "Task",
    completed: true,
  },
  {
    id: 1,
    text: "Task 1",
    completed: true,
  },
  {
    id: 2,
    text: "Task 2",
    completed: false,
  },
];

it("Renders Todos by waiting for the api call", async () => {
  mock.onGet(url).reply(200, todos);
  render(<TodosPage />);

  const text = await screen.findByText("Task");
  const loading = screen.queryByText("Loading...");
  expect(text).toBeInTheDocument();
  expect(loading).toBeNull();
});
