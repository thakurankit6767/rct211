import {
  ADD_TODOS_ERROR,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODOS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...payload],
        isLoading: false,
        isError: false,
      };
    }
    case GET_TODOS_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }

    case ADD_TODOS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case ADD_TODOS_SUCCESS: {
      
      return {
        ...state,
        data: [...state.data, payload],
        isLoading: false,
        isError: false,
      };
    }
    case ADD_TODOS_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
  }
  return state;
};
