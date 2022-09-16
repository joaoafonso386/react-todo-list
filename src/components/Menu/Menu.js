import { NavLink } from "react-router-dom";

const Menu = ({ routes }) => {
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
