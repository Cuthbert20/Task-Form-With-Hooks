import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList(props) {
  //   console.log(props);
  return (
    <Paper>
      <List>
        {props.todos.map((todo, index) => {
          return (
            //JSX Fragment<>
            <React.Fragment key={index}>
              <Todo
                id={todo.id}
                removeTodo={props.removeTodo}
                task={todo.task}
                completed={todo.completed}
                key={index}
                toggleTodo={props.toggleTodo}
                // we could pass all the props of todo using {...todo} if we wanted
              />
              <Divider />
            </React.Fragment>
          );
        })}
      </List>
    </Paper>
  );
}

export default TodoList;
