import { useEffect, useState } from "react";
import { requestTodos } from "../../api/requests/requests";
import TodoList from "../../components/common/TodoList/TodoList";

const TodosPage = () => {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    requestTodos().then((data) => {
      setTodoList(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : (
        <TodoList todos={todoList} />
      )}
    </div>
  );
};

export default TodosPage;
