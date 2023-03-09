import {
  createUserWithEmailAndPassword,
  getAuth,
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
import { getDatabase, onValue, ref, ref as _ref, set } from "firebase/database";

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

export const getCurrentUser = () => (dispatch) => {
  const auth = getAuth();
  const user = auth.currentUser;

  try {
    dispatch({
      type: CURRENT_USER_REQUEST,
    });
    const db = getDatabase();
    const starCountRef = ref(db, "users/" + user?.uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch({
        type: CURRENT_USER_SUCCESS,
        payload: data,
      });
      console.log(data);
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CURRENT_USER_FAIL,
      payload: error,
    });
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: null,
  });
};
