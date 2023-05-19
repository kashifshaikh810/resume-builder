import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import {
  getAllResumesDataReducer,
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
import {
  deleteUserReducer,
  getAllUsersReducer,
  profileReducer,
} from "./reducers/profileReducer";
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
  getAllResumesData: getAllResumesDataReducer,
  getAllUsers: getAllUsersReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
