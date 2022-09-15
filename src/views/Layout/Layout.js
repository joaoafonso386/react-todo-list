import Menu from "../../components/Menu/Menu";
import Title from "../../components/Title/Title";
import { Switch } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <Title tag="h2" name="Welcome to this todo-list-app!" cu="cu" hi="sadd" />
      <Switch>{children}</Switch>
    </div>
  );
};

export default Layout;
