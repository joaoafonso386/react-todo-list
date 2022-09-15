import { useEffect, useState } from "react";
import { requestTodos } from "../../api/requests/requests";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    requestTodos().then((data) => setTodoList(data));
  }, []);

  const mappedTodos = todoList.map(({ id, text, completed }) => {
    return (
      <div>
        <h3>{text}</h3>
        <p>id: {id}</p>
        <p>status: {completed ? "completed" : "not completed"}</p>
      </div>
    );
  });

  return <div>{mappedTodos}</div>;
};

export default TodoList;
