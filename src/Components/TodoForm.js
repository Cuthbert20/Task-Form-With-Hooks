import React from "react";
import Paper from "@material-ui/core/Paper";
//Material-ui TextField is a styled Input
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

//destructuring from props addTodo
function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          //using preventDefault with onSubmit so it doesn't refresh the page.
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          margin="normal"
          label="Add New Todo"
          //   fullWidth makes the text field go all the way across
          fullWidth
          value={value}
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
