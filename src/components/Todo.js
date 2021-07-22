import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <Button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon me-2"
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>{" "}
        <Button
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
          color="danger"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>{" "}
      </div>
    </div>
  ));
};

export default Todo;
