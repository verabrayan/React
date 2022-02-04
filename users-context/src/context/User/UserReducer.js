import { get_Users, get_User } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action)=>{
  const { payload, type } = action;

  switch (type) {
    case get_Users:
      return {
        ...state,
        users: payload,
      };
    case get_User:
      return {
        ...state,
        selectedUser: payload,
      };
    default:
      return state;
  }
};