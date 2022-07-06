import React from 'react';
import ToDoItem from './ToDoItem';
const ToDo = () => {
    /*
<input type="checkbox" name="" id="" /><p>Create react project</p>
                <input type="checkbox" name="" id="" /><p>Create project clone</p>
                <input type="checkbox" name="" id="" /><p>Fix personal website</p>
                <input type="checkbox" name="" id="" /><p>Apply for internships + junior roles</p>


    */
    return (
        <div className='ToDo-page'>
            <h1>To Do List</h1>
                <ToDoItem></ToDoItem>
                <ToDoItem></ToDoItem>
                <ToDoItem></ToDoItem>
                <ToDoItem></ToDoItem>
                <ToDoItem></ToDoItem>
        </div>
    );
}

export default ToDo;
