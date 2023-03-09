import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import { resumeDataReducer } from "./reducers/resumeReducer";
import { signInReducer, signUpReducer } from "./reducers/authReducer";

const reducer = combineReducers({
  resumeData: resumeDataReducer,
  userSignUp: signUpReducer,
  userSignIn: signInReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
