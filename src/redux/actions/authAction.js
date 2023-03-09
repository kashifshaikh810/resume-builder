import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth, database } from "../../Firebase/FirebaseConfig";
import {
  CLEAR_ERRORS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/authConstants";
import { ref as _ref, set } from "firebase/database";

export const signUpAction =
  (firstName, lastName, email) => async (dispatch) => {
    let password = 12345678;
    try {
      dispatch({
        type: SIGNUP_REQUEST,
      });
      await createUserWithEmailAndPassword(Auth, email, password)
        .then(({ user }) => {
          signOut(Auth)
            .then(() => {
              dispatch({
                type: SIGNUP_SUCCESS,
              });
              set(_ref(database, "users/" + user?.uid), {
                userId: user?.uid,
                firstName: firstName,
                lastName: lastName,
                email: user?.email,
              });
            })
            .catch((error) => {
              dispatch({
                type: SIGNUP_FAIL,
                payload: error?.code,
              });
            });
        })
        .catch((error) => {
          dispatch({
            type: SIGNUP_FAIL,
            payload: error?.code,
          });
        });
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error?.code,
      });
    }
  };

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: null,
  });
};
