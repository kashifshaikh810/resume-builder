import { onValue, ref, set } from "firebase/database";
import { database } from "../../Firebase/FirebaseConfig";

import {
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
  GET_RESUME_TITLE_FAIL,
  GET_RESUME_TITLE_SUCCESS,
  GET_RESUME_TITLE_REQUEST,
  RESUME_DATA_REQUEST,
  RESUME_DATA_SUCCESS,
  RESUME_DATA_FAIL,
  GET_RESUME_DATA_REQUEST,
  GET_RESUME_DATA_SUCCESS,
  GET_RESUME_DATA_FAIL,
  REMOVE_PROFILE_IMAGE_REQUEST,
  REMOVE_PROFILE_IMAGE_SUCCESS,
  REMOVE_PROFILE_IMAGE_FAIL,
} from "../constants/resumeConstants";

export const getResumeData = (user) => (dispatch) => {
  try {
    dispatch({ type: GET_RESUME_DATA_REQUEST });
    const tempRef = ref(database, "userResumeTemplateData/" + user?.userId);
    onValue(tempRef, async (snapshot) => {
      const data = await snapshot.val();
      dispatch({ type: GET_RESUME_DATA_SUCCESS, payload: data });
    });
  } catch (error) {
    console.log(error, `err 1`);
    dispatch({ type: GET_RESUME_DATA_FAIL, payload: error?.code });
  }
};

export const resumeDataSave = (user, data) => (dispatch) => {
  try {
    dispatch({ type: RESUME_DATA_REQUEST });
    const resumeData = {
      data,
      username: `${user?.firstName} ${user?.lastName}`,
      userId: user?.userId,
    };

    set(ref(database, "userResumeTemplateData/" + user?.userId), resumeData)
      .then(async () => {
        await dispatch({ type: RESUME_DATA_SUCCESS, payload: resumeData });
      })
      .catch((error) => {
        console.log(error, `err 1`);
        dispatch({
          type: RESUME_DATA_FAIL,
          payload: error?.code,
        });
      });
  } catch (error) {
    console.log(error, `err 2`);
    dispatch({ type: RESUME_DATA_FAIL, payload: error?.code });
  }
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

export const getResumeTitleAction = (user) => (dispatch) => {
  try {
    dispatch({ type: GET_RESUME_TITLE_REQUEST });
    const tempRef = ref(database, "userResumesTitle/" + user?.userId);
    onValue(tempRef, (snapshot) => {
      const data = snapshot ? snapshot.val() : {};
      dispatch({ type: GET_RESUME_TITLE_SUCCESS, payload: data });
    });
  } catch (error) {
    dispatch({ type: GET_RESUME_TITLE_FAIL, payload: error?.code });
  }
};

export const removeProfileImageFromDB = (user, data) => (dispatch) => {
  try {
    dispatch({ type: REMOVE_PROFILE_IMAGE_REQUEST });
    const resumeData = {
      data,
      username: `${user?.firstName} ${user?.lastName}`,
      userId: user?.userId,
    };

    set(ref(database, "userResumeTemplateData/" + user?.userId), resumeData)
      .then(() => {
        dispatch({ type: REMOVE_PROFILE_IMAGE_SUCCESS });
      })
      .catch((error) => {
        dispatch({
          type: RESUME_DATA_FAIL,
          payload: error?.code,
        });
      });
  } catch (error) {
    dispatch({ type: REMOVE_PROFILE_IMAGE_FAIL, payload: error?.code });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
