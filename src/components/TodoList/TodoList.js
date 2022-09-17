import Pagination from "../Pagination/Pagination";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React from "react";
import List from "@mui/material/List";

const TodoList = ({ todos }) => {
  const mappedTodos = todos.map(({ id, text, completed }) => {
    return (
      <div key={id}>
        <List>
          <ListItem>
            <ListItemText
              primary={text}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline", marginTop: "20px" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    id {id}
                  </Typography>
                  {" - status"}: {completed ? "completed" : "not completed"}
                </React.Fragment>
              }
            ></ListItemText>
          </ListItem>
        </List>
      </div>
    );
  });

  return (
    <div>
      <Pagination data={mappedTodos} todosPerPage={6} />
    </div>
  );
};

export default TodoList;
