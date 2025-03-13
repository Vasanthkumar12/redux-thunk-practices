import { applyMiddleware, createStore } from "redux"
import { todoReducer } from "./todoReducer"
import { thunk } from "redux-thunk"

export const todoStore = createStore(todoReducer, applyMiddleware(thunk))