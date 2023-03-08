import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth } from "../../Firebase/FirebaseConfig";
import {
  CLEAR_ERRORS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/authConstants";
import { getDatabase, ref as _ref, set } from "firebase/database";

export const signUpAction =
  (firstName, lastName, email) => async (dispatch) => {
    let password = 12345678;
    const database = getDatabase();
    try {
      dispatch({
        type: SIGNUP_REQUEST,
      });
      await createUserWithEmailAndPassword(Auth, email, password).then(
        ({ user }) => {
          let userData = {
            userId: user?.uid,
            firstName: firstName,
            lastName: lastName,
            email: user?.email,
          };
          set(_ref(`${database}, 'users/' ${user?.uid}`), {
            userId: user?.uid,
            firstName: firstName,
            lastName: lastName,
            email: user?.email,
          });
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: userData,
          });
          signOut();
        }
      );
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload: error?.message,
      });
    }
  };

export const clearErrors = (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: null,
  });
};
