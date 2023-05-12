import {
  COVER_LETTER_TITLE_REQUEST,
  COVER_LETTER_TITLE_SUCCESS,
  CLEAR_ERRORS,
  COVER_LETTER_TITLE_FAIL,
  GET_COVER_LETTER_TITLE_REQUEST,
  GET_COVER_LETTER_TITLE_SUCCESS,
  GET_COVER_LETTER_TITLE_FAIL,
} from "../constants/coverLetterConstants";

export const coverLetterTitleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COVER_LETTER_TITLE_REQUEST:
    case COVER_LETTER_TITLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COVER_LETTER_TITLE_SUCCESS:
    case COVER_LETTER_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        coverLetterTitleData: action.payload,
      };
    case GET_COVER_LETTER_TITLE_FAIL:
    case COVER_LETTER_TITLE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
