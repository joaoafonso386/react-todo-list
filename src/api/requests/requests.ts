import { ITodosList } from "../../interfaces/TodosList.interface";
import { api } from "../api";

const requestTodos = async () => {
  const { data } = await api.get<ITodosList[]>("/tasks");
  return data;
};

export { requestTodos };
