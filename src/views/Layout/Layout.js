import Menu from "../../components/Menu/Menu";
import Title from "../../components/Title/Title";

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <Title tag="h2" name="Welcome to this todo-list-app!" />
      {children}
    </div>
  );
};

export default Layout;
