import { Outlet } from "react-router-dom";
import Menu from "../common/Menu/Menu";
import Title from "../common/Title/Title";
import { routes } from "../../routes/routes";

const Layout: React.FC = () => {
  return (
    <div>
      <Menu routes={routes} />
      <Title variant="h4" name="Welcome to this todo list app!" />
      <Outlet />
    </div>
  );
};

export default Layout;
