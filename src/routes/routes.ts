const routes = {
  HOME: {
    name: "Home Page",
    path: "/",
  },
  TODOLIST: {
    name: "Todo List",
    path: "/todo-list",
  },
};

export { routes };
export type IRoutes = typeof routes;
