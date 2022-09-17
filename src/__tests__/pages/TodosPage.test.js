import renderer from "react-test-renderer";
import TodosPage from "../../views/TodosPage/TodosPage";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
const mock = new MockAdapter(axios);

it("Todos Page renders loading", () => {
  const todosPage = renderer.create(<TodosPage />).toJSON();
  expect(todosPage).toMatchSnapshot();
});

test("Renders Todos by waiting for the api call", async () => {
  mock.onGet("http://localhost:3008/api/tasks").reply(200, {
    id: 1,
    text: "Task 1",
    completed: true,
  });
  render(<TodosPage />);
  const text = await screen.findByText("Task 1");
  const error = screen.queryByText("There has been an error");
  expect(text).toBeInTheDocument();
  expect(error).toBeNull();
});

test("Renders Error", async () => {
  mock
    .onGet("http://localhost:3008/api/tasks")
    .reply(null, "There has been an error");
  render(<TodosPage />);
  const text = screen.queryByText("There has been an error");
  expect(text).toBeInTheDocument();
});
