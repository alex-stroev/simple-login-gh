import * as actions from "./actionTypes";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case actions.ADD_REG_INFO:
      return { ...state, regInfo: action.payload };

    default:
      return state;
  }
}
