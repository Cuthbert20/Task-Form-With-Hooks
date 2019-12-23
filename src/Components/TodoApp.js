import React, { useEffect } from "react";
import useTodoState from "../hooks/useTodoState";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
//using uuid to add new id to every new todo see line 21 look at the react chrome dev tools to see the long unique id that is assigned.

export default function TodoApp() {
  const initialTodos = [{ id: 1, task: "pet Dog", completed: true }];
  // const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  // useEffect(() => {
  //   //sync todos to local storage so we can save new Todos
  //   //we have to save the todos as a string, if we just saved them as an object we would get an error.
  //   window.localStorage.setItem("todos", JSON.stringify(todos));
  //   //only monitoring the piece of data todos ie I know it sthe only piece of state on this component but, its good practice.
  // }, [todos]);
  const paperStyle = {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "#fafafa"
  };

  return (
    <Paper style={paperStyle} elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH REACT HOOKS</Typography>
        </Toolbar>
      </AppBar>
      {/* Material UI Grid similar to BootStrap Grid Look up for more info */}
      <Grid container justify="center" style={{ marginTop: "2rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            todos={todos}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

//TodoApp
//TodoForm
//TodoList
//TodoItem

//each todo with have the following
//id, task, completed
