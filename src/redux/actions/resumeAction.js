import { getDatabase, ref, set } from "firebase/database";
import { database } from "../../Firebase/FirebaseConfig";

import {
  RESUME_DATA,
  COVER_LETTER_DATA,
  SELECTED_RESUME_TEMPLATE_REQUEST,
  SELECTED_RESUME_TEMPLATE_SUCCESS,
  SELECTED_RESUME_TEMPLATE_FAIL,
  CLEAR_ERRORS,
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
  (user, templateName) => (dispatch) => {
    try {
      dispatch({ type: SELECTED_RESUME_TEMPLATE_REQUEST });
      const data = {
        userId: user?.userId,
        username: `${user?.firstName} ${user?.lastName}`,
        email: user?.email,
        selectedTemplate: templateName,
      };

      set(ref(database, "usersSelectedTemplate/" + user?.userId), data)
        .then(() => {
          dispatch({ type: SELECTED_RESUME_TEMPLATE_SUCCESS, payload: data });
        })
        .catch((error) => {
          alert(error);
          dispatch({
            type: SELECTED_RESUME_TEMPLATE_FAIL,
            payload: error?.code,
          });
        });
    } catch (error) {
      dispatch({ type: SELECTED_RESUME_TEMPLATE_FAIL, payload: error?.code });
      alert(error);
    }
  };

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
