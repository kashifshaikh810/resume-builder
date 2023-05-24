import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
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
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
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
                authProviderType: "email-password",
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
  try {
    dispatch({
      type: CURRENT_USER_REQUEST,
    });
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      const db = getDatabase();
      const dbRef = ref(db, "users/" + user?.uid);
      onValue(dbRef, async (snapshot) => {
        const dbUser = await snapshot.val();
        dispatch({
          type: CURRENT_USER_SUCCESS,
          payload: dbUser,
        });
      });
    });
  } catch (err) {
    dispatch({
      type: CURRENT_USER_FAIL,
      payload: err?.code,
    });
  }
};

export const logOutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT_REQUEST,
  });
  signOut(Auth)
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGOUT_FAIL,
        payload: error,
      });
    });
};

export const signUpWithGoogle = () => (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_REQUEST,
    });
    const provider = new GoogleAuthProvider();

    const auth = Auth;

    signInWithPopup(auth, provider)
      .then((res) => {
        let user = res?.user;
        signOut(Auth)
          .then(() => {
            dispatch({
              type: SIGNUP_SUCCESS,
            });
            set(ref(database, "users/" + user?.uid), {
              userId: user?.uid,
              firstName: user?.displayName?.substring(
                0,
                user?.displayName?.indexOf(" ")
              ),
              lastName: user?.displayName?.substring(
                user?.displayName?.indexOf(" ") + 1
              ),
              email: user?.email,
              authProviderType: "google",
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

export const signInWithGoogle = () => (dispatch) => {
  try {
    dispatch({
      type: SIGNIN_REQUEST,
    });
    const provider = new GoogleAuthProvider();

    const auth = Auth;

    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: res?.user,
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

export const signUpWithFacebook = () => (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_REQUEST,
    });
    const provider = new FacebookAuthProvider();

    const auth = Auth;

    signInWithPopup(auth, provider)
      .then((res) => {
        let user = res?.user;
        signOut(Auth)
          .then(() => {
            dispatch({
              type: SIGNUP_SUCCESS,
            });
            set(ref(database, "users/" + user?.uid), {
              userId: user?.uid,
              firstName: user?.displayName?.substring(
                0,
                user?.displayName?.indexOf(" ")
              ),
              lastName: user?.displayName?.substring(
                user?.displayName?.indexOf(" ") + 1
              ),
              email: user?.email,
              authProviderType: "facebook",
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

export const signInWithFacebook = () => (dispatch) => {
  try {
    dispatch({
      type: SIGNIN_REQUEST,
    });
    const provider = new FacebookAuthProvider();

    const auth = Auth;

    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch({
          type: SIGNIN_SUCCESS,
          payload: res?.user,
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

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
    payload: null,
  });
};
