import { DELETE_SUCESSS, FETCH_USERS_SUCCESS } from "./actions";

const initialState = {
  users: [],
  userDeleted: {},
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, users: payload };
    case DELETE_SUCESSS:
      return { ...state, userDeleted: payload };
    default:
      return state;
  }
};
export default rootReducer;
