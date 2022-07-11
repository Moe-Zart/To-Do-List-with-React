import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="ToDo-item">
      <input
        type="checkbox"
        checked={props.todoChecked}
        onChange={() => props.handleChange(props.todoKey)}
      />
      <p>{props.todoText}</p>
    </div>
  );
};

export default ToDoItem;
