import Menu from "../../components/Menu/Menu";
import Title from "../../components/Title/Title";
import { routes } from "../../routes/routes";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu routes={routes} />
      <Title tag="h4" name="Welcome to this todo list app!" />
      {children}
    </div>
  );
};

export default Layout;
