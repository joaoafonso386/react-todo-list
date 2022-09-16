import Pagination from "../Pagination/Pagination";

const TodoList = ({ todos }) => {
  const mappedTodos = todos.map(({ id, text, completed }) => {
    return (
      <div key={id}>
        <h3>{text}</h3>
        <p>id: {id}</p>
        <p>status: {completed ? "completed" : "not completed"}</p>
      </div>
    );
  });

  return (
    <div>
      <Pagination data={mappedTodos} todosPerPage={10} />
    </div>
  );
};

export default TodoList;
