import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoData from "./ToDoData";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ToDoData,
    };
  }
  render() {
    const todoComponents = this.state.todos.map((todo) => (
      <ToDoItem
        todoKey={todo.id}
        todoText={todo.text}
        todoChecked={todo.completed}
      />
    ));

    return (
      <div className="ToDo-page">
        <h1>To Do List</h1>
        {todoComponents}
      </div>
    );
  }
}

export default ToDo;
