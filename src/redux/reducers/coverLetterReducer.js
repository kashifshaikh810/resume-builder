import {
  COVER_LETTER_TITLE_REQUEST,
  COVER_LETTER_TITLE_SUCCESS,
  CLEAR_ERRORS,
  COVER_LETTER_TITLE_FAIL,
  GET_COVER_LETTER_TITLE_REQUEST,
  GET_COVER_LETTER_TITLE_SUCCESS,
  GET_COVER_LETTER_TITLE_FAIL,
  SELECTED_COVER_LETTER_TEMPLATE_REQUEST,
  SELECTED_COVER_LETTER_TEMPLATE_SUCCESS,
  SELECTED_COVER_LETTER_TEMPLATE_FAIL,
  GET_SELECTED_COVER_LETTER_TEMPLATE_REQUEST,
  GET_SELECTED_COVER_LETTER_TEMPLATE_SUCCESS,
  GET_SELECTED_COVER_LETTER_TEMPLATE_FAIL,
  COVER_LETTER_DATA_REQUEST,
  COVER_LETTER_DATA_SUCCESS,
  COVER_LETTER_DATA_FAIL,
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

export const selectCoverLetterTemplateReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SELECTED_COVER_LETTER_TEMPLATE_REQUEST:
    case SELECTED_COVER_LETTER_TEMPLATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SELECTED_COVER_LETTER_TEMPLATE_SUCCESS:
    case SELECTED_COVER_LETTER_TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        coverLetterSelectedTemplateData: action.payload,
      };
    case GET_SELECTED_COVER_LETTER_TEMPLATE_FAIL:
    case SELECTED_COVER_LETTER_TEMPLATE_FAIL:
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

export const coverLetterDataReducer = (
  state = { coverLetterTemplateData: {} },
  action
) => {
  switch (action.type) {
    case COVER_LETTER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COVER_LETTER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        coverLetterTemplateData: action.payload,
      };
    case COVER_LETTER_DATA_FAIL:
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
