import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "./authTypes";

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
export const loginError = (payload) => ({ type: LOGIN_ERROR, payload });
export const logout = (payload) => ({ type: LOGOUT });
