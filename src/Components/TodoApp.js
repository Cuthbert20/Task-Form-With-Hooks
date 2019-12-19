import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Learn React Native", completed: false },
    { id: 2, task: "Read wtih Ryker for 30 Mins", completed: false },
    { id: 3, task: "Learn React Hooks", completed: true },
    { id: 4, task: "Workout", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: 5, task: newTodoText, completed: false }]);
  };
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
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
}

//TodoApp
//TodoForm
//TodoList
//TodoItem

//each todo with have the following
//id, task, completed
