import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoData from './ToDoData';

const ToDo = () => {
    const todoComponents = ToDoData.map((todo)=><ToDoItem todoKey={todo.id} todoText={todo.text} todoChecked={todo.completed}/>)

    return (
        <div className='ToDo-page'>
            <h1>To Do List</h1>
                {todoComponents}
        </div>
    );
}

export default ToDo;
