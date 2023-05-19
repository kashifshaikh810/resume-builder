import { deleteUser, updateEmail } from "firebase/auth";
import { getDatabase, ref, remove, set } from "firebase/database";

import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  CLEAR_ERRORS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/profileConstants";

export const updateProfileAction =
  (authUser, firstName, lastName, email) => async (dispatch) => {
    const newEmail = email;
    const db = getDatabase();
    const userId = authUser.auth.currentUser.uid;

    try {
      dispatch({ type: UPDATE_PROFILE_REQUEST });

      await updateEmail(authUser, newEmail)
        .then((res) => {
          set(ref(db, "users/" + userId), {
            firstName,
            lastName,
            email,
            userId,
          })
            .then((res) => {
              dispatch({ type: UPDATE_PROFILE_SUCCESS });
            })
            .catch((err) => {
              dispatch({ type: UPDATE_PROFILE_FAIL, payload: err.code });
            });
        })
        .catch((err) => {
          dispatch({ type: UPDATE_PROFILE_FAIL, payload: err.code });
        });
    } catch (error) {
      dispatch({ type: UPDATE_PROFILE_FAIL, payload: error.code });
    }
  };

export const deleteUserAction = (user) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
    deleteUser(user)
      .then(() => {
        const db = getDatabase();
        const userDBRef = ref(db, "users/" + user?.uid);
        const coverLetterTempDBRef = ref(
          db,
          "userCoverLetterTemplateData/" + user?.uid
        );
        const coverLetterTitleDBRef = ref(
          db,
          "userCoverLetterTitle/" + user?.uid
        );
        const resumeTempDBRef = ref(db, "userResumeTemplateData/" + user?.uid);
        const resumeTitleDBRef = ref(db, "userResumesTitle/" + user?.uid);
        const selectedCoverLetterTemplateDBRef = ref(
          db,
          "usersSelectedCoverLetterTemplate/" + user?.uid
        );
        const SelectedTemplateDBRef = ref(
          db,
          "usersSelectedTemplate/" + user?.uid
        );
        remove(userDBRef)
          .then(() => {
            remove(coverLetterTempDBRef)
              .then(() => {
                remove(coverLetterTitleDBRef)
                  .then(() => {
                    remove(resumeTempDBRef)
                      .then(() => {
                        remove(resumeTitleDBRef)
                          .then(() => {
                            remove(selectedCoverLetterTemplateDBRef)
                              .then(() => {
                                remove(SelectedTemplateDBRef)
                                  .then(() => {
                                    dispatch({ type: DELETE_USER_SUCCESS });
                                  })
                                  .catch((error) => {
                                    dispatch({
                                      type: DELETE_USER_FAIL,
                                      payload: error?.code,
                                    });
                                  });
                              })
                              .catch((error) => {
                                dispatch({
                                  type: DELETE_USER_FAIL,
                                  payload: error?.code,
                                });
                              });
                          })
                          .catch((error) => {
                            dispatch({
                              type: DELETE_USER_FAIL,
                              payload: error?.code,
                            });
                          });
                      })
                      .catch((error) => {
                        dispatch({
                          type: DELETE_USER_FAIL,
                          payload: error?.code,
                        });
                      });
                  })
                  .catch((error) => {
                    dispatch({ type: DELETE_USER_FAIL, payload: error?.code });
                  });
              })
              .catch((error) => {
                dispatch({ type: DELETE_USER_FAIL, payload: error?.code });
              });
          })
          .catch((error) => {
            dispatch({ type: DELETE_USER_FAIL, payload: error?.code });
          });
      })
      .catch((error) => {
        // An error ocurred
        dispatch({ type: DELETE_USER_FAIL, payload: error?.code });
        // ...
      });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error?.code });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
