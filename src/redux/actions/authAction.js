import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Auth, database } from "../../Firebase/FirebaseConfig";
import {
  CLEAR_ERRORS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  CURRENT_USER_REQUEST,
  CURRENT_USER_SUCCESS,
  CURRENT_USER_FAIL,
} from "../constants/authConstants";
import { getDatabase, onValue, ref, set } from "firebase/database";

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
              set(ref(database, "users/" + user?.uid), {
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

export const signInAction = (email) => async (dispatch) => {
  let password = 12345678;

  try {
    dispatch({
      type: SIGNIN_REQUEST,
    });
    await signInWithEmailAndPassword(Auth, email, password)
      .then((user) => {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: user,
        });
      })
      .catch((error) => {
        dispatch({
          type: SIGNIN_FAIL,
          payload: error?.code,
        });
      });
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload: error?.code,
    });
  }
};

export const getCurrentUser = (data) => (dispatch) => {
  const { loading, user, error } = data;
  try {
    dispatch({
      type: CURRENT_USER_REQUEST,
      payload: loading,
    });
    const db = getDatabase();
    const dbRef = ref(db, "users/" + user?.uid);
    onValue(dbRef, (snapshot) => {
      const dbUser = snapshot.val();
      const userData = {
        dbUser,
        loading,
      };
      dispatch({
        type: CURRENT_USER_SUCCESS,
        payload: userData,
      });
    });
  } catch (err) {
    const errorData = {
      error: err.code || error.code,
      loading,
    };
    dispatch({
      type: CURRENT_USER_FAIL,
      payload: errorData,
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: null,
  });
};
