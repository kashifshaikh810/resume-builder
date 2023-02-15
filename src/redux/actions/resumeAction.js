import { RESUME_DATA, COVER_LETTER_DATA } from "../constants/resumeConstants";

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
