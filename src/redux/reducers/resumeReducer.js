import { COVER_LETTER_DATA, RESUME_DATA } from "../constants/resumeConstants";

export const resumeDataReducer = (
  state = { data: [], coverLetterData: [] },
  action
) => {
  switch (action.type) {
    case RESUME_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case COVER_LETTER_DATA:
      return {
        ...state,
        coverLetterData: action.payload,
      };
    default:
      return state;
  }
};
