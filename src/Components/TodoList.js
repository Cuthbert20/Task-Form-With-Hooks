import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList(props) {
  console.log(props);
  return (
    <Paper>
      <List>
        {props.todos.map((todo, index) => {
          return (
            //JSX Fragment<>
            <React.Fragment key={index}>
              <Todo task={todo.task} completed={todo.completed} key={index} />
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </Paper>
  );
}

export default TodoList;
