import { FETCH_ALL_TANKS } from "../actions/weapons";

const initialState = {
  tanks: []
};

export default function weaponsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_TANKS: {
      return { ...state, tanks: action.payload };
    }

    default:
      return state;
  }
}
