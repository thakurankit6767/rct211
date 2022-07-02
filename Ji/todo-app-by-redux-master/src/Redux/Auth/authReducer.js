import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "./authTypes";

const initialState = {
  isAuth: false,
  isError: false,
  token:""
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return { ...state };
    }
    case LOGIN_ERROR: {
      return { ...state };
    }
    case LOGOUT: {
      return { ...state };
    }
  }
};
