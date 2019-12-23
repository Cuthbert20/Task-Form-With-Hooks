import { useState } from "react";
import uuid from "uuid/v4";
export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  //instead of returning an array
  //useTodoState Hook will return an object.
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      //filter out removed todo
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      //call setTodos with new todos array
      setTodos(updatedTodos);
    },
    toggleTodo: todoId => {
      //map over todos
      const updatedTodo = todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
    },
    editTodo: (todoId, newTask) => {
      const updateTodo = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updateTodo);
    }
  };
};
