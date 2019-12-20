import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
//using uuid to add new id to every new todo see line 21 look at the react chrome dev tools to see the long unique id that is assigned.
import uuid from "uuid/v4";

export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Learn React Native", completed: false },
    { id: 2, task: "Read wtih Ryker for 30 Mins", completed: false },
    { id: 3, task: "Learn React Hooks", completed: true },
    { id: 4, task: "Workout", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  const removeTodo = todoId => {
    //filter out removed todo
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    //call setTodos with new todos array
    setTodos(updatedTodos);
  };
  const toggleTodo = todoId => {
    //map over todos
    const updatedTodo = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);
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
      {/* Material UI Grid similar to BootStrap Grid Look up for more info */}
      <Grid container justify="center" style={{ marginTop: "2rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
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
