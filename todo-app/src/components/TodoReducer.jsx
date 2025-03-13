import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delete_todo, getAllTodos, toggleTodoStatus, filterTasks } from '../redux/actions';
import '../style/todoReducer.css'

export const TodoReducer = () => {
    const dispatch = useDispatch();
    const todoArr = useSelector(state => state.todos);
    const todoRef = useRef(null);

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoRef.current.value === '') {
            alert('The todo is Empty. Please enter a todo!');
            return;
        }
        const todoObj = { task: todoRef.current.value, id: Date.now(), isCompleted: false };
        dispatch(addTodo(todoObj));
        todoRef.current.value = "";
    };

    return (
        <div className="container">
            <h1>Todo App using Redux</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter todo" ref={todoRef} />
                <input type="submit" value="Add Todo" />
            </form>

            <div className="filter-buttons">
                <button onClick={() => dispatch(getAllTodos())}>All</button>
                <button onClick={() => dispatch(filterTasks("pending"))}>Pending</button>
                <button onClick={() => dispatch(filterTasks("completed"))}>Completed</button>
            </div>

            <div className="todo-list">
                {todoArr.map(todo => (
                    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`} key={todo.id}>
                        <strong>{todo.task}</strong>
                        <div>
                            <button className="status-btn" onClick={() => dispatch(toggleTodoStatus(todo.id))}>
                                {todo.isCompleted ? 'Completed' : 'Pending'}
                            </button>
                            <button className="delete-btn" onClick={() => dispatch(delete_todo(todo.id))}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
