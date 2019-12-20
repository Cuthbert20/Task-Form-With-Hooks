//React Component form to edit todos when edit button is clicked
import React from "react";
import useInputState from "../hooks/useInputState";
import TextField from "@material-ui/core/TextField";

function EditTodoForm({ id, todoTask, editTodo, setEditing }) {
  const [value, handleChange, reset] = useInputState(todoTask);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        setEditing();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth
        margin="normal"
        //using autoFocus so that when you click the edit button user is autofocused on the form/input for editing todo
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
