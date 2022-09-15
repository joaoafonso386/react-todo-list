import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";

const Menu = () => {
  const { HOME, TODOLIST } = routes;

  return (
    <div>
      <p>
        <NavLink to={HOME.path}>Home Page</NavLink>
      </p>
      <p>
        <NavLink to={TODOLIST.path}>Todo List</NavLink>
      </p>
    </div>
  );
};

export default Menu;
