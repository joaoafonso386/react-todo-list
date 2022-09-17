import Pagination from "../../components/Pagination/Pagination";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

const mappedTodos = todos.map(({ id, text, completed }) => {
  return (
    <div key={id}>
      <h3>{text}</h3>
      <p>id: {id}</p>
      <p>status: {completed ? "completed" : "not completed"}</p>
    </div>
  );
});

it("Change to prev page on button click", async () => {
  render(<Pagination data={mappedTodos} todosPerPage={10} />);
  const prevPageButton = screen.getByTestId("prev-page-button");
  const user = userEvent.setup();
  await user.click(prevPageButton);
});

it("Change to next page on button click", async () => {
  render(<Pagination data={mappedTodos} todosPerPage={10} />);
  const prevPageButton = screen.getByTestId("next-page-button");
  const user = userEvent.setup();
  await user.click(prevPageButton);
});
