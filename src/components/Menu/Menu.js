import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import Stack from "@mui/material/Stack";

const Menu = ({ routes }) => {
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
                  Home Page
                </Button>
              </NavLink>

              <NavLink className="menu-item" to={TODOLIST.path}>
                <Button
                  sx={{ bgcolor: "dimgray", ":hover": { bgcolor: "dimgray" } }}
                  variant="contained"
                >
                  Todo List
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
