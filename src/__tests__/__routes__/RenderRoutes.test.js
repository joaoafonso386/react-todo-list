import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import RenderRoutes from "../../routes/RenderRoutes/RenderRoutes";
import Layout from "../../views/Layout/Layout";

test("App renders routes correctly and changes page on user click", async () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Layout>
        <RenderRoutes />
      </Layout>
    </Router>
  );

  const user = userEvent.setup();
  expect(screen.getByText("Intro")).toBeInTheDocument();

  await user.click(screen.getByText("Todo List"));

  expect(await screen.findByText("Task")).toBeInTheDocument();
});
