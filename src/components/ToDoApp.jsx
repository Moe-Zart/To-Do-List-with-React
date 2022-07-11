import React from "react";
import ToDoItem from "./ToDoItem";
import ToDoData from "./ToDoData";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: ToDoData,
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(id) {
    //receiving the id from props.todoKey (shown in ToDoItem.jsx)
    this.setState(prev => {
      //always put the previous state before the arrow function. //map through the whole ToDoData array so you can target specific elements within the array
      const newToDoData = prev.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return{
        todos: newToDoData
      }
      
    })
  }
  render() {
    const todoComponents = this.state.todos.map(item =>
      <ToDoItem
        key={item.id}
        item={item}
        handleChange={this.handleChange}
      />
    );

    return (
      <div className="ToDo-page">
        <h1>To Do List</h1>
        {todoComponents}
      </div>
    );
  }
}

export default ToDo;
