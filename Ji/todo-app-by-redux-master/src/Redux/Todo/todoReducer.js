import {
  ADD_TODO,
  EDIT_TODO,
  GET_TODO_ERROR,
  GET_TODO_SUCCESS,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./todoTypes";

const initialState = {
  data: [],
  isError: false,
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        data: [...state.data, ...payload],
        isError: false,
      };
    }
    case GET_TODO_ERROR: {
      return { ...state, isError: true };
    }
    case ADD_TODO: {
      return { ...state, data: [...state.data, payload] };
    }

    case REMOVE_TODO: {
      let newTodos = state.data.filter((item) => item.id !== payload);
      return { ...state, data: newTodos };
    }
    case TOGGLE_TODO: {
      let completedTodo = state.data.map((item) =>
        item.id === payload.id ? payload : item
      );

      return { ...state, data: completedTodo };
    }
    case EDIT_TODO: {
      let editedTodo = state.data.map((item) =>
        item.id === payload.id ? payload : item
      );
      return { ...state, data: editedTodo };
    }
    default: {
      return state;
    }
  }
};
