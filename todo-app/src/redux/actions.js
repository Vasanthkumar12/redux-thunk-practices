import { DISPLAY_TODO } from "./actionTypes"

const getTodos = () => {
    return JSON.parse(localStorage.getItem("todos")) || []
}

const setTodos = (arr) => {
    localStorage.setItem("todos", JSON.stringify(arr))
}

const displayTodo = (arr) => {
    return { type: DISPLAY_TODO, payload: arr }
}


export const getAllTodos = () => {
    
    return (dispatch) => {
        let arr = JSON.parse(localStorage.getItem("todos")) || []
        dispatch(displayTodo(arr))
    }
}

export const addTodo = (todoObj) => {
    return (dispatch) => {
        let arr = getTodos()
        arr.push(todoObj)
        setTodos(arr)
        dispatch(displayTodo(arr))
        // getAllTodos()
    }
}

export const delete_todo = (todo_id) => {
    return (dispatch) => {
        let arr = getTodos()
        arr = arr.filter(todo => todo.id !== todo_id)
        setTodos(arr)
        dispatch(displayTodo(arr))
        // getAllTodos()
    }
}

export const toggleTodoStatus = (todoId) => {
    return (dispatch) => {
        let arr = getTodos()
        for(let i=0; i<arr.length; i++) {
            if(arr[i].id == todoId) {
                arr[i].isCompleted = !arr[i].isCompleted
            }
        }
        setTodos(arr)
        dispatch(displayTodo(arr))
    }
}

export const filterTasks = (status) => {
    return (dispatch) => {
        let arr = getTodos()
        let filteredArr = arr
        if(status == 'completed') {
            filteredArr = arr.filter(todo => todo.isCompleted == true)
        }
        else{
            filteredArr = arr.filter(todo => todo.isCompleted == false)
        }
        dispatch(displayTodo(filteredArr))
    }
}