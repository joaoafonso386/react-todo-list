import "@testing-library/jest-dom";
import TodosPage from "../../views/TodosPage/TodosPage";
import { render, screen } from "@testing-library/react";
import MockAdapter from "axios-mock-adapter";
import { api } from "src/api/api";

const mock = new MockAdapter(api);
const url = "/tasks";
const todos = Array(100)
  .fill(0)
  .map((todo, id) => ({
    id,
    text: "Task",
    completed: id % 2 === 0,
  }));

it("Renders Todos by waiting for the api call", async () => {
  mock.onGet(url).reply(200, todos);
  render(<TodosPage />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  const text = await screen.findAllByTestId("completed");
  expect(text).toHaveLength(6);
  expect(screen.queryByText("Loading...")).toBeNull();
});
