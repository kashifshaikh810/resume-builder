import {
  COVER_LETTER_DATA,
  SELECTED_RESUME_TEMPLATE_REQUEST,
  SELECTED_RESUME_TEMPLATE_SUCCESS,
  SELECTED_RESUME_TEMPLATE_FAIL,
  CLEAR_ERRORS,
  SELECTED_RESUME_TEMPLATE_RESET,
  GET_SELECTED_RESUME_TEMPLATE_REQUEST,
  GET_SELECTED_RESUME_TEMPLATE_SUCCESS,
  GET_SELECTED_RESUME_TEMPLATE_FAIL,
  RESUME_TITLE_REQUEST,
  RESUME_TITLE_SUCCESS,
  RESUME_TITLE_FAIL,
  GET_RESUME_TITLE_REQUEST,
  GET_RESUME_TITLE_SUCCESS,
  GET_RESUME_TITLE_FAIL,
  RESUME_DATA_REQUEST,
  RESUME_DATA_SUCCESS,
  RESUME_DATA_FAIL,
  GET_RESUME_DATA_REQUEST,
  GET_RESUME_DATA_SUCCESS,
  GET_RESUME_DATA_FAIL,
  REMOVE_PROFILE_IMAGE_REQUEST,
  REMOVE_PROFILE_IMAGE_SUCCESS,
  REMOVE_PROFILE_IMAGE_FAIL,
  REMOVE_PROFILE_IMAGE_RESET,
  GET_ALL_RESUMES_DATA,
} from "../constants/resumeConstants";

export const resumeDataReducer = (
  state = { resumeTemplateData: {} },
  action
) => {
  switch (action.type) {
    case RESUME_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESUME_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        resumeTemplateData: action.payload,
      };
    case RESUME_DATA_FAIL:
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
    case COVER_LETTER_DATA:
      return {
        ...state,
        coverLetterData: action.payload,
      };
    default:
      return state;
  }
};

export const getResumeDataReducer = (
  state = { resumeTemplateGetData: {} },
  action
) => {
  switch (action.type) {
    case GET_RESUME_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RESUME_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        resumeTemplateGetData: action.payload,
      };
    case GET_RESUME_DATA_FAIL:
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

export const selectTemplateReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SELECTED_RESUME_TEMPLATE_REQUEST:
    case SELECTED_RESUME_TEMPLATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELECTED_RESUME_TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        templateData: action.payload,
        success: true,
      };
    case GET_SELECTED_RESUME_TEMPLATE_SUCCESS:
      return {
        ...state,
        loading: false,
        templateData: action.payload,
      };
    case GET_SELECTED_RESUME_TEMPLATE_FAIL:
    case SELECTED_RESUME_TEMPLATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SELECTED_RESUME_TEMPLATE_RESET:
      return {
        ...state,
        success: false,
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

export const resumeTitleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_RESUME_TITLE_REQUEST:
    case RESUME_TITLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RESUME_TITLE_SUCCESS:
    case RESUME_TITLE_SUCCESS:
      return {
        ...state,
        loading: false,
        titleData: action.payload,
      };
    case GET_RESUME_TITLE_FAIL:
    case RESUME_TITLE_FAIL:
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

export const removeProfileImageReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_PROFILE_IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case REMOVE_PROFILE_IMAGE_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };
    case REMOVE_PROFILE_IMAGE_FAIL:
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

export const getAllResumesDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_RESUMES_DATA:
      return {
        ...state,
        allResumes: action.payload,
      };
    default:
      return state;
  }
};
