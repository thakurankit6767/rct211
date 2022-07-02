import {
  ADD_TODO,
  EDIT_TODO,
  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./todoTypes";

export const getTodoSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload,
});
export const getTodoError = () => ({ type: GET_TODO_ERROR });
export const addTodo = (payload) => ({ type: ADD_TODO, payload });

export const deleteTodo = (payload) => ({ type: REMOVE_TODO, payload });
export const toggleTodo = (payload) => ({ type: TOGGLE_TODO, payload });

export const editTodo = (payload) => ({ type: EDIT_TODO, payload });
