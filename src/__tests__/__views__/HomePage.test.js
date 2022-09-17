import renderer from "react-test-renderer";
import HomePage from "../../views/HomePage/HomePage";

it("Home Page Renders correctly", () => {
  const homePage = renderer.create(<HomePage />).toJSON();
  expect(homePage).toMatchSnapshot();
});
