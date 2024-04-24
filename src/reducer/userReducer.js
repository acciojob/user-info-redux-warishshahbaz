// reducers/userReducer.js
import { setName, setEmail } from "../actions/userActions";

const initialState = {
  name: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case setName.type:
      return {
        ...state,
        name: action.payload,
      };
    case setEmail.type:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
