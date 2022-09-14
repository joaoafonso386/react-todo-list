import Menu from "./components/Menu/Menu";
import Title from "../../components/Title/Title";
import { Switch } from "react-router";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <Title />
      <Switch>{children}</Switch>
    </div>
  );
};

export default Layout;
