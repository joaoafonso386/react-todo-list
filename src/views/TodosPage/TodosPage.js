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
      .catch((err) => setError(true));
  }, []);

  return (
    <div>
      <TodoList todos={todoList} loading={loading} error={error} />
    </div>
  );
};

export default memo(TodosPage);
