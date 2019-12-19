import React from "react";
import Paper from "@material-ui/core/Paper";
//Material-ui TextField is a styled Input
import TextField from "@material-ui/core/TextField";
import useInputState from "../hooks/useInputState";

function TodoForm(props) {
  const [value, handleChange, reset] = useInputState("");
  console.log(value);
  return (
    <Paper>
      <TextField value={value} onChange={handleChange} />
    </Paper>
  );
}

export default TodoForm;
