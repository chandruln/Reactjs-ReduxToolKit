import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"

const Todo = () => {
  const [showUpdateTodo, setShowUpdateTodo] = useState({}) 
  const [todoText, setTodoText] = useState("")

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

const addTodo = (todoToAdd) => {
    setTodos([
        ...todos, 
        {
            id: uuidv4(),
            name: todoToAdd,
            checked: false
        }
    ])
}

const updateTodo = (todoUpdate) => {
    setShowUpdateTodo(todoUpdate);
}

const updateTodos = (todotoUpdate) => {
    setTodos(
        todos.map((todo) => (
            todotoUpdate.id == todo.id ? {...todo, name: todotoUpdate.name} : todo
        ))
    )
    setShowUpdateTodo({});
}

const deleteTodo = (todotodelete) => {
    setTodos(
        todos.filter((todo) => todo.id !== todotodelete.id)
    )
}

  return (
    <div className='todos'>
        <input value={todoText} onChange={(e) => setTodoText(e.target.value)}/>
        <button onClick={(e) => addTodo(todoText)}> Add Todo </button>
        {
            todos.map((todo) => (
                <div className='todo'>
                    <input type='checkbox' onChange={() => toggleTodo(todo)} checked={todo.checked}></input>
                    <h1>{todo.name}</h1>
                    <button onClick={() => updateTodo(todo)}>Update</button>
                    <button onClick={() => deleteTodo(todo)}>Delete</button>                    
                </div>
            ))
        }
        {showUpdateTodo.name ? 
            (
                <div>
                <input style={{display: showUpdateTodo ? "" : "none"}} value={showUpdateTodo ? showUpdateTodo.name : ""} 
                    onChange={(e) => setShowUpdateTodo({
                    ...showUpdateTodo, 
                    name: e.target.value,
                })} />
                <button onClick={() => updateTodos(showUpdateTodo)}>Update this todo</button>
                </div>
            ) : (" ")
        }
    </div>
  )
}

export default Todo