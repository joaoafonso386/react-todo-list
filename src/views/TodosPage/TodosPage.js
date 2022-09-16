import { useEffect, useState, memo } from "react";
import { requestTodos } from "../../api/requests/requests";
import TodoList from "../../components/TodoList/TodoList";

const TodosPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    requestTodos()
      .then((data) => {
        setTodoList(data);
        setLoading(false);
      })
      .catch((error) => setError(true));
  }, []);

  if (error) return <div>There has been an error</div>;

  return (
    <div>{loading ? <div>Loading...</div> : <TodoList todos={todoList} />}</div>
  );
};

export default memo(TodosPage);
