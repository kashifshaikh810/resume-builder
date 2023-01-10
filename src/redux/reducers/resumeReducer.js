import { RESUME_DATA } from "../constants/resumeConstants";

export const resumeDataReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case RESUME_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
