import HomePage from "../../views/HomePage/HomePage";
import TodosPage from "../../views/TodosPage/TodosPage";
import { Route, Switch } from "react-router-dom";
import { routes } from "../routes";

const RenderRoutes = () => {
  const { HOME, TODOLIST } = routes;

  return (
    <div>
      <Switch>
        <Route path={HOME.path} exact={HOME.exact}>
          <HomePage />
        </Route>
        <Route>
          <TodosPage path={TODOLIST.path} />
        </Route>
      </Switch>
    </div>
  );
};

export default RenderRoutes;
