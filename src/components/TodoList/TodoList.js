import Pagination from "../Pagination/Pagination";
import { useEffect, useState, memo } from "react";
import { requestTodos } from "../../api/requests/requests";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestTodos()
      .then((data) => {
        setTodoList(data);
        setLoading(false);
      })
      .catch((err) => setError(true));
  }, []);

  const mappedTodos = todoList.map(({ id, text, completed }) => {
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

export default memo(TodoList);
