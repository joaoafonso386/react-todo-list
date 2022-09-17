import renderer from "react-test-renderer";
import Layout from "../../views/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

it("Layout Renders correctly", () => {
  const layout = renderer
    .create(
      <Router>
        <Layout />
      </Router>
    )
    .toJSON();
  expect(layout).toMatchSnapshot();
});
