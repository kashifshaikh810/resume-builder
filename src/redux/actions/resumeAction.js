import { onValue, ref, set } from "firebase/database";
import { database } from "../../Firebase/FirebaseConfig";

import {
  RESUME_DATA,
  COVER_LETTER_DATA,
  SELECTED_RESUME_TEMPLATE_REQUEST,
  SELECTED_RESUME_TEMPLATE_SUCCESS,
  SELECTED_RESUME_TEMPLATE_FAIL,
  CLEAR_ERRORS,
  GET_SELECTED_RESUME_TEMPLATE_REQUEST,
  GET_SELECTED_RESUME_TEMPLATE_SUCCESS,
  GET_SELECTED_RESUME_TEMPLATE_FAIL,
  RESUME_TITLE_REQUEST,
  RESUME_TITLE_SUCCESS,
  RESUME_TITLE_FAIL,
} from "../constants/resumeConstants";

export const resumeDataSave = (data) => (dispatch) => {
  dispatch({
    type: RESUME_DATA,
    payload: data,
  });
};

export const coverLetterDataSave = (coverLetterData) => (dispatch) => {
  dispatch({
    type: COVER_LETTER_DATA,
    payload: coverLetterData,
  });
};

export const selectResumeTemplateAction =
  (user, templateName, isSelectedTemplate) => (dispatch) => {
    try {
      dispatch({ type: SELECTED_RESUME_TEMPLATE_REQUEST });
      const data = {
        userId: user?.userId,
        username: `${user?.firstName} ${user?.lastName}`,
        email: user?.email,
        selectedTemplate: templateName,
        isSelectedTemplate,
      };

      set(ref(database, "usersSelectedTemplate/" + user?.userId), data)
        .then(() => {
          dispatch({ type: SELECTED_RESUME_TEMPLATE_SUCCESS, payload: data });
        })
        .catch((error) => {
          dispatch({
            type: SELECTED_RESUME_TEMPLATE_FAIL,
            payload: error?.code,
          });
        });
    } catch (error) {
      dispatch({ type: SELECTED_RESUME_TEMPLATE_FAIL, payload: error?.code });
    }
  };

export const getSelectResumeTemplateAction = (user) => (dispatch) => {
  try {
    dispatch({ type: GET_SELECTED_RESUME_TEMPLATE_REQUEST });
    const tempRef = ref(database, "usersSelectedTemplate/" + user?.userId);
    onValue(tempRef, (snapshot) => {
      const data = snapshot ? snapshot.val() : {};
      dispatch({ type: GET_SELECTED_RESUME_TEMPLATE_SUCCESS, payload: data });
    });
  } catch (error) {
    dispatch({ type: GET_SELECTED_RESUME_TEMPLATE_FAIL, payload: error?.code });
  }
};

export const resumeTitleAction = (user, data) => (dispatch) => {
  try {
    dispatch({ type: RESUME_TITLE_REQUEST });
    set(ref(database, "userResumesTitle/" + user?.userId), data)
      .then(() => {
        dispatch({ type: RESUME_TITLE_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({
          type: RESUME_TITLE_FAIL,
          payload: error?.code,
        });
      });
  } catch (error) {
    dispatch({ type: RESUME_TITLE_FAIL, payload: error?.code });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
