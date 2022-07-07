import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE,
  UPDATE_BOOK_REQUEST,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_ERROR,
  UPDATE_SHOE_COUNT_REQUEST,
  UPDATE_SHOE_COUNT_SUCCESS,
  UPDATE_SHOE_COUNT_FAILURE,
} from "./actionTypes";
import axios from "axios";

//fetch and get all books
export const getBooks = (params) => (dispatch) => {
  dispatch({ type: GET_BOOKS_REQUEST });
  return axios
    .get(`http://localhost:8080/books`, params)
    .then((r) => dispatch({ type: GET_BOOKS_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: GET_BOOKS_FAILURE, payload: err }));
};

export const addBooksRequest = () => ({ type: UPDATE_BOOK_REQUEST });
export const addBooksSuccess = (payload) => ({
  type: UPDATE_BOOK_SUCCESS,
  payload,
});
export const addBooksError = (payload) => ({
  type: UPDATE_BOOK_ERROR,
  payload,
});

export const addBooksAPI = (params) => (dispatch) => {
  // console.log(params)
  dispatch(addBooksRequest());
  axios
    .patch(`http://localhost:8080/books/${params.id}`, {
      author: params.author,
      book_name: params.book,
    })
    .then((r) => dispatch(addBooksSuccess(r.data)))
    .catch((err) => dispatch(addBooksError(err)));
};






export const inc_count_req = ()=>{
  return {
      type : UPDATE_SHOE_COUNT_REQUEST,
      payload : true
  }
};


export const inc_count = (inc)=>{
  return {
      type : UPDATE_SHOE_COUNT_SUCCESS,
      payload : inc
  }
};

export const inc_count_fail = ()=>{
  return {
      type : UPDATE_SHOE_COUNT_FAILURE,
      payload : true
  }
};