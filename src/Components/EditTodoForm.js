//React Component form to edit todos when edit button is clicked
import React from "react";
import useInputState from "../hooks/useInputState";
import TextField from "@material-ui/core/TextField";

function EditTodoForm(props) {
  const [value, handleChange, reset] = useInputState(props.todoTask);
  return (
    <TextField
      value={value}
      onChange={handleChange}
      fullWidth
      margin="normal"
    />
  );
}

export default EditTodoForm;
