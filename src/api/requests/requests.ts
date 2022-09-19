import { api } from "../api";

const requestTodos = async () => {
  const { data } = await api.get("/tasks");
  return data;
};

export { requestTodos };
