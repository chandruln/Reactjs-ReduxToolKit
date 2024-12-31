import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"

const Todo = () => {
  const [showUpdateTodo, setShowUpdateTodo] = useState({}) 

  const [todos, setTodos] = useState([
    {
        id: uuidv4(),
        name: "Todo 1",
        checked: false,
    },
    {
        id: uuidv4(),
        name: "Todo 2",
        checked: true,
    },
]);

const toggleTodo = (todoToggle) => {
    const newTodos = todos.map((todo) => {
        if(todo == todoToggle){
            return{
                ...todo,
                checked: !todo.checked
            }
        }
        return todo;
    })
    setTodos(newTodos);
}

const updateTodo = (todoUpdate) => {
    setShowUpdateTodo(todoUpdate);
    console.log(todoUpdate);
}

  return (
    <div className='todos'>
        {
            todos.map((todo) => (
                <div className='todos'>
                    <input type='checkbox' onChange={() => toggleTodo(todo)} checked={todo.checked}></input>
                    <h1>{todo.name}</h1>
                    <button onClick={() => updateTodo(todo)}>Update</button>
                    <input></input>
                </div>
            ))
        }
    </div>
  )
}

export default Todo