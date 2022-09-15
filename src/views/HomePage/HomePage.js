import { Route } from "react-router";
import Intro from "../../components/Intro/Intro";
import TodoList from "../../components/TodoList/TodoList";

const HomePage = ({ routes }) => {
  const { HOME, TODOLIST } = routes;

  return (
    <div>
      <main>
        <Route path={HOME.path} exact={HOME.exact}>
          <article>
            <Intro />
          </article>
        </Route>
        <Route path={TODOLIST.path}>
          <TodoList />
        </Route>
      </main>
    </div>
  );
};

export default HomePage;
