import { DISPLAY_TODO } from "./actionTypes";

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) { 
        case DISPLAY_TODO:
            return {
                ...state, todos: [...action.payload]
            }

        default:
            return state
    }
}