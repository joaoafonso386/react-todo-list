import Pagination from "../Pagination/Pagination";

const TodoList = ({ todos, loading, error }) => {
  const mappedTodos = todos.map(({ id, text, completed }) => {
    return (
      <div key={id}>
        <h3>{text}</h3>
        <p>id: {id}</p>
        <p>status: {completed ? "completed" : "not completed"}</p>
      </div>
    );
  });

  if (error) return <div>There has been an error</div>;

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Pagination data={mappedTodos} todosPerPage={10} />
      )}
    </div>
  );
};

export default TodoList;
