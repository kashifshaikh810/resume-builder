import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import {
  getResumeDataReducer,
  removeProfileImageReducer,
  resumeDataReducer,
  resumeTitleReducer,
  selectTemplateReducer,
} from "./reducers/resumeReducer";
import {
  currentUserReducer,
  logOutReducer,
  signInReducer,
  signUpReducer,
} from "./reducers/authReducer";
import { deleteUserReducer, profileReducer } from "./reducers/profileReducer";
import {
  coverLetterDataReducer,
  coverLetterTitleReducer,
  getCoverLetterDataReducer,
  selectCoverLetterTemplateReducer,
} from "./reducers/coverLetterReducer";

const reducer = combineReducers({
  resumeData: resumeDataReducer,
  userSignUp: signUpReducer,
  userSignIn: signInReducer,
  currentUser: currentUserReducer,
  logOut: logOutReducer,
  userProfile: profileReducer,
  deleteUser: deleteUserReducer,
  selectTemplate: selectTemplateReducer,
  resumeTitle: resumeTitleReducer,
  getResumeData: getResumeDataReducer,
  removeProfileImage: removeProfileImageReducer,
  coverLetterTitle: coverLetterTitleReducer,
  selectCoverLetterTemplate: selectCoverLetterTemplateReducer,
  coverLetterData: coverLetterDataReducer,
  getCoverLetterData: getCoverLetterDataReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
