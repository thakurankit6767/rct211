import axios from "axios";
import {
  ADD_TODOS_ERROR,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

export const getTodoRequest = () => ({ type: GET_TODOS_REQUEST });
export const getTodoSuccess = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload,
});
export const getTodoError = (payload) => ({ type: GET_TODOS_ERROR, payload });

//parent function of get request
export const getTodos = () => (dispatch) => {
  dispatch(getTodoRequest());
  axios
    .get(`http://localhost:8080/todos`)
    .then((r) => dispatch(getTodoSuccess(r.data)))
    .catch((err) => dispatch(getTodoError(err)));
};

//===================================================================
//adding todos
export const addTodoRequest = () => ({ type: ADD_TODOS_REQUEST });
export const addTodoSuccess = (payload) => ({
  type: ADD_TODOS_SUCCESS,
  payload,
});
export const addTodoError = (payload) => ({ type: ADD_TODOS_ERROR, payload });

//adding todos parent funtion
export const addTodos = (payload) => (dispatch) => {
  dispatch(addTodoRequest());
  axios
    .post(`http://localhost:8080/todos`, {
      title: payload.value,
      status: payload.status,
    })
    .then((r) => dispatch(addTodoSuccess(r.data)))
    .catch((err) => dispatch(addTodoError(err)));
};
