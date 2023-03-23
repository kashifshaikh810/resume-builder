import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";

import Dashboard from "../Screens/Dashboard/Dashboard";
import Login from "../Screens/Login/Login";
import LoginDashboard from "../Screens/Login/LoginDashboard";
import ResumesCoverLetters from "../Screens/ResumesCoverLetters/ResumesCoverLetters";
import ResumesTemplates from "../Screens/ResumesTemplates/ResumesTemplates";
import EmailScreen from "../Screens/SignUp/EmailScreen";
import AccountSettings from "../Screens/AccountSettings/AccountSettings";
import FirstNameLastName from "../Screens/SignUp/FirstNameLastName";
import EditResume from "../Screens/EditResume/EditResume";
import AllTemplates from "../Screens/AllTemplates/AllTemplates.js";
import { clearErrors } from "../../redux/actions/authAction";
import { Auth } from "../../Firebase/FirebaseConfig";
import NotFoundPage from "../Screens/NotFoundPage/NotFoundPage";
import Loader from "../Screens/NotFoundPage/Loader";

const Navigation = () => {
  const dispatch = useDispatch();
  const { error: signInError } = useSelector((state) => state.userSignIn);
  const [user, loading, error] = useAuthState(Auth);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (signInError) {
      alert(signInError);
      dispatch(clearErrors());
    }

    if (error) {
      alert(error);
    }

    if (loading) {
      setIsLoading(loading);
    }

    if (loading === false) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }
  }, [dispatch, signInError, error, loading]);

  return (
    <Router>
      <Routes>
        {isLoading ? (
          <Route path="*" element={<Loader />} />
        ) : (
          <>
            <Route
              path="/"
              element={<Dashboard navigate={useNavigate} params={useParams} />}
            />
            {user ? (
              <Route
                path="*"
                element={<NotFoundPage navigate={useNavigate} />}
              />
            ) : (
              <Route
                path="/create-resume/introduction"
                element={
                  <FirstNameLastName
                    navigate={useNavigate}
                    params={useParams}
                  />
                }
              />
            )}
            {user ? (
              <Route path="*" element={<NotFoundPage />} />
            ) : (
              <Route
                path="/create-resume/contact-info/:firstName/:lastName"
                element={
                  <EmailScreen navigate={useNavigate} params={useParams} />
                }
              />
            )}
            {user ? (
              <Route path="*" element={<NotFoundPage />} />
            ) : (
              <Route
                path="/app/auth/sign-in"
                element={
                  <LoginDashboard navigate={useNavigate} params={useParams} />
                }
              />
            )}
            {user ? (
              <Route path="*" element={<NotFoundPage />} />
            ) : (
              <Route
                path="/app/auth/log-in"
                element={<Login navigate={useNavigate} params={useParams} />}
              />
            )}
            {user ? (
              <Route
                path="/app"
                element={
                  <ResumesCoverLetters
                    navigate={useNavigate}
                    params={useParams}
                  />
                }
              />
            ) : (
              <Route path="*" element={<NotFoundPage />} />
            )}
            {user ? (
              <Route
                path="/app/account"
                element={
                  <AccountSettings navigate={useNavigate} params={useParams} />
                }
              />
            ) : (
              <Route path="*" element={<NotFoundPage />} />
            )}
            {user ? (
              <Route
                path="/resumes-templates"
                element={
                  <ResumesTemplates navigate={useNavigate} params={useParams} />
                }
              />
            ) : (
              <Route path="*" element={<NotFoundPage />} />
            )}
            {user ? (
              <Route
                path="/app/:tabName/:id/edit"
                element={
                  <EditResume navigate={useNavigate} params={useParams} />
                }
              />
            ) : (
              <Route path="*" element={<NotFoundPage />} />
            )}
            {user ? (
              <Route
                path="/app/:tabName/:id/templates"
                element={
                  <AllTemplates navigate={useNavigate} params={useParams} />
                }
              />
            ) : (
              <Route path="*" element={<NotFoundPage />} />
            )}
          </>
        )}
      </Routes>
    </Router>
  );
};

export default Navigation;
