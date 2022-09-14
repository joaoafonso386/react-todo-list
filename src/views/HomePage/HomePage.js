import { Route } from "react-router";

const HomePage = ({ routes }) => {
  const { HOME } = routes;

  return (
    <div>
      <main>
        <Route path={HOME.path} exact={HOME.exact}>
          <article>
            <div></div>
          </article>
        </Route>
      </main>
    </div>
  );
};

export default HomePage;
