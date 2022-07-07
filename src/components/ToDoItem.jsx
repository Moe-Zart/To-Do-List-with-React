import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="ToDo-item">
      <input type="checkbox" checked={props.todoChecked} />
      <p>{props.todoText}</p>
    </div>
  );
};

export default ToDoItem;
