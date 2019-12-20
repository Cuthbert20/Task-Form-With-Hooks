import React from "react";
import EditTodoForm from "./EditTodoForm";
import useToggleState from "../hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, setEditing] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {/* checking if isEditing true and if so return input where we can edit the todo else display todo*/}
      {isEditing ? (
        <EditTodoForm
          id={id}
          todoTask={task}
          editTodo={editTodo}
          setEditing={setEditing}
        />
      ) : (
        <>
          <Checkbox
            onClick={() => toggleTodo(id)}
            tabIndex={-1}
            checked={completed}
          />
          {/* adding textDecoration for line through if completed using ternary operator */}
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            {/* these Material-UI buttons are SVG's so we are adding an aria-label for screen readers */}
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={setEditing} aria-label="Edit">
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
