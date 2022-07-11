import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="ToDo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p>{props.item.text}</p>
    </div>
  );
};

export default ToDoItem;
