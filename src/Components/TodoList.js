import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

function TodoList(props) {
  //   console.log(props);
  if (props.todos.length)
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
                  editTodo={props.editTodo}
                  // we could pass all the props of todo using {...todo} if we wanted
                />
                {/* we don't want a Divider after the last todo it looks ugly so using ternary, using shortcut && instead of ? <Divider/> : null */}
                {index < props.todos.length - 1 && <Divider />}
              </React.Fragment>
            );
          })}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
