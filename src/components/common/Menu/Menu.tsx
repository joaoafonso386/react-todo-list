import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { IRoutes } from "../../../routes/routes";
import "./Menu.css";

interface IMenu {
  routes: IRoutes;
}

const Menu: React.FC<IMenu> = ({ routes }) => {
  const { HOME, TODOLIST } = routes;

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            variant="regular"
            style={{
              justifyContent: "space-between",
              backgroundColor: "floralwhite",
            }}
          >
            <Toolbar>
              <Typography color="black" variant="h6" component="div">
                React Todo List
              </Typography>
            </Toolbar>
            <Stack direction="row" spacing={2}>
              <NavLink className="menu-item" to={HOME.path}>
                <Button
                  sx={{ bgcolor: "dimgray", ":hover": { bgcolor: "dimgray" } }}
                  variant="contained"
                >
                  {HOME.name}
                </Button>
              </NavLink>

              <NavLink className="menu-item" to={TODOLIST.path}>
                <Button
                  sx={{ bgcolor: "dimgray", ":hover": { bgcolor: "dimgray" } }}
                  variant="contained"
                >
                  {TODOLIST.name}
                </Button>
              </NavLink>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Menu;
