import Pagination from "../../components/Pagination/Pagination";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

const todos = Array(100).map((_, id) => ({
  id,
  text: "Task",
  completed: true,
}));

const mappedTodos = todos.map(({ id, text, completed }) => {
  return (
    <div key={id}>
      <h3>{text}</h3>
      <p>id: {id}</p>
      <p>status: {completed ? "completed" : "not completed"}</p>
    </div>
  );
});

it("Check if pagination is working on button click", async () => {
  render(<Pagination data={mappedTodos} todosPerPage={10} />);

  const prevPageButton = screen.getByTestId("prev-page-button");
  const nextPageButton = screen.getByTestId("next-page-button");
  const currentPage = screen.getByTestId("current-page");
  const user = userEvent.setup();

  await user.click(prevPageButton);
  expect(currentPage.innerHTML).toBe("1");
  await user.click(nextPageButton);
  expect(screen.getByTestId("current-page").innerHTML).toBe("2");
  await user.click(prevPageButton);
  expect(screen.getByTestId("current-page").innerHTML).toBe("1");
});
