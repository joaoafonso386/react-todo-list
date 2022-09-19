import Pagination from "../Pagination/Pagination";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import React from "react";
import List from "@mui/material/List";
import { ITodosList } from "src/views/TodosPage/TodosPage";

interface ITodoListProps {
  todos: ITodosList[] | [];
}

const TodoList: React.FC<ITodoListProps> = ({ todos }) => {
  const mappedTodos = todos.map(({ id, text, completed }) => {
    return (
      <div key={id}>
        <List>
          <ListItem sx={{ border: "1px solid black", borderRadius: "10px" }}>
            <ListItemText
              primary={text}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{
                      display: "inline",
                      marginTop: "20px",
                    }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    id {id}
                  </Typography>
                  <span data-testid="completed">
                    {" "}
                    - status: {completed ? "completed" : "not completed"}
                  </span>
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

export default React.memo(TodoList);
