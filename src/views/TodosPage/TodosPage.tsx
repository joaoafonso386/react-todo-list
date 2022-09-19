import { useEffect, useState } from "react";
import { requestTodos } from "../../api/requests/requests";
import TodoList from "../../components/common/TodoList/TodoList";

export interface ITodosList {
  id: number;
  text: string;
  completed: boolean;
}

const TodosPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [todoList, setTodoList] = useState<ITodosList[] | []>([]);

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
        <main>
          <article>
            <TodoList todos={todoList} />
          </article>
        </main>
      )}
    </div>
  );
};

export default TodosPage;
