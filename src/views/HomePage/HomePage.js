import { Route } from "react-router";

const HomePage = ({ routes }) => {
  const { HOME } = routes;

  return (
    <div>
      <main>
        <Route path={routes.HOME} {...routes.exact}>
          <article>
            <div></div>
          </article>
        </Route>
      </main>
    </div>
  );
};
