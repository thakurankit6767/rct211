import * as types from "./actionTypes";

const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_TODO_SUCCESS: {
      return {
        ...state,
        todo: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.POST_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.POST_TODO_SUCCESS: {
      let newArray = [...state.todo, payload];
      return {
        ...state,
        todo: newArray,
        isLoading: false,
        isError: false,
      };
    }
    case types.POST_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.TOGGLE_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.TOGGLE_TODO_SUCCESS: {
      let newArray = state.todo.map((elem) =>
        elem.id == payload.id
          ? { ...elem, taskStatus: payload.taskStatus }
          : elem
      );

      return {
        ...state,
        todo: newArray,
        isLoading: false,
        isError: false,
      };
    }
    case types.TOGGLE_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.REMOVE_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.REMOVE_TODO_SUCCESS: {
      let newArray = state.todo.filter((elem) => elem.id !== payload);

      return {
        ...state,
        todo: newArray,
        isLoading: false,
        isError: false,
      };
    }
    case types.REMOVE_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case types.UPDATE_TODO_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.UPDATE_TODO_SUCCESS: {
      let newArray = [...state.todo, payload];
      return {
        ...state,
        todo: newArray,
        isLoading: false,
        isError: false,
      };
    }
    case types.UPDATE_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      console.log("default post");
      return state;
    }
  }
};
