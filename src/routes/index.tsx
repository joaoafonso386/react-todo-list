import HomePage from "../views/HomePage/HomePage";
import TodosPage from "../views/TodosPage/TodosPage";
import Layout from "../components/Layout/Layout";
import { routes } from "./routes";
import { Route, Routes as Switch, BrowserRouter } from "react-router-dom";

const Router = () => {
  const { HOME, TODOLIST } = routes;

  /** index makes the HomePage render to the <Outlet/> inside the layout at the "/" route */

  return (
    <BrowserRouter>
      <Switch>
        <Route path={HOME.path} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={TODOLIST.path} element={<TodosPage />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
