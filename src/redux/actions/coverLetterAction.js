import { onValue, ref, set } from "firebase/database";
import { database } from "../../Firebase/FirebaseConfig";
import {
  COVER_LETTER_TITLE_FAIL,
  COVER_LETTER_TITLE_REQUEST,
  COVER_LETTER_TITLE_SUCCESS,
  CLEAR_ERRORS,
  GET_COVER_LETTER_TITLE_FAIL,
  GET_COVER_LETTER_TITLE_SUCCESS,
  GET_COVER_LETTER_TITLE_REQUEST,
} from "../constants/coverLetterConstants";

export const coverLetterTitleAction = (user, data) => (dispatch) => {
  try {
    dispatch({ type: COVER_LETTER_TITLE_REQUEST });
    set(ref(database, "userCoverLetterTitle/" + user?.userId), data)
      .then(() => {
        dispatch({ type: COVER_LETTER_TITLE_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({
          type: COVER_LETTER_TITLE_FAIL,
          payload: error?.code,
        });
      });
  } catch (error) {
    dispatch({ type: COVER_LETTER_TITLE_FAIL, payload: error?.code });
  }
};

export const getCoverLetterTitleAction = (user) => (dispatch) => {
  try {
    dispatch({ type: GET_COVER_LETTER_TITLE_REQUEST });
    const tempRef = ref(database, "userCoverLetterTitle/" + user?.userId);
    onValue(tempRef, (snapshot) => {
      const data = snapshot ? snapshot.val() : {};
      dispatch({ type: GET_COVER_LETTER_TITLE_SUCCESS, payload: data });
    });
  } catch (error) {
    dispatch({ type: GET_COVER_LETTER_TITLE_FAIL, payload: error?.code });
  }
};

export const clearErrorsFromCoverLetter = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
