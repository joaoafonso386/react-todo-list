import { Outlet } from "react-router-dom";
import Menu from "../../components/common/Menu/Menu";
import Title from "../../components/common/Title/Title";
import { routes } from "../../routes/routes";

const Layout = () => {
  return (
    <div>
      <Menu routes={routes} />
      <Title tag="h4" name="Welcome to this todo list app!" />
      <Outlet />
    </div>
  );
};

export default Layout;
