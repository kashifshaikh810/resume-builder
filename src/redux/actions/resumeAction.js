import { RESUME_DATA } from "../constants/resumeConstants";

export const resumeDataSave = (data) => (dispatch) => {
  dispatch({
    type: RESUME_DATA,
    payload: data,
  });
};
