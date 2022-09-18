import Pagination from "../../components/common/Pagination/Pagination";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

const todos = Array(10).map((todo, id) => ({
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
  render(<Pagination data={mappedTodos} todosPerPage={5} />);

  const prevPageButton = screen.getByTestId("prev-page-button");
  const nextPageButton = screen.getByTestId("next-page-button");
  const user = userEvent.setup();

  await user.click(prevPageButton);
  expect(screen.getByTestId("current-page").innerHTML).toBe("1");
  await user.click(nextPageButton);
  expect(screen.getByTestId("current-page").innerHTML).toBe("2");
  await user.click(prevPageButton);
  expect(screen.getByTestId("current-page").innerHTML).toBe("1");
  await user.click(nextPageButton);
  await user.click(nextPageButton); //to get to the last page
});
