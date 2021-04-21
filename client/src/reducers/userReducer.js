import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";

const userReducer = (userState, action) => {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
          ...userState,
          user: action.payload,
          isAuthenticated: true,
      };
    case LOGOUT_SUCCESS:
      return {
          isAuthenticated: false,
          user: {},
      };
    default:
      return userState;
  }
};

export default userReducer;