import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const initialState = {
    todos: [],
    loading: true,
    errorMsg: ''
}

const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'

const todoReducer = (state, action) => {
    // console.log(action, "= action")
    // console.log(state, "= state")

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [...state.todos, action.payload]
            }
        case EDIT_TODO:
            return {

            }
        default:
            return state
    }
}
export const TodoReducer = () => {
    const [todosList, dispatch] = useReducer(todoReducer, initialState)
    const todos = todosList.todos
    console.log(todos, 'todos list')
    const [todo, setTodo] = useState({ text: '', priority: '' })
   
    const addTodo = (e) => {  
        e.preventDefault()
        // console.log(todo)
        if(todo.text == '' || todo.priority == "") {
            alert("Please give the task and priority not Empty!")
            return
        }
        dispatch({ type: ADD_TODO, payload: {...todo, id: Date.now() }})
        setTodo({ text: '', priority: '' })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setTodo({...todo, [name]: value})
    }
  return (
    <div>
        <h1>Todo App using redux-thunk</h1>
        <form onSubmit={addTodo}>
            <input onChange={handleChange} name="text" type="text" value={todo.text} placeholder="enter todo" />
            <select onChange={handleChange} name="priority" value={todo.priority} id="priority">
                <option value="">Select</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input type="submit" value='Add Todo' />
        </form>

        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <p><strong>{todo.text}</strong> {todo.priority}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
