import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, signInAction } from "../../../redux/actions/authAction";
import { SIGNIN_RESET } from "../../../redux/constants/authConstants";

import MyButton from "../../MyButton/MyButton";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const navigate = props?.navigate();
  const [emailLoginError, setEmailLoginError] = useState("");

  const dispatch = useDispatch();
  const { loading, isAuthenticated, user, success, error } = useSelector(
    (state) => state.userSignIn
  );

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
    setEmailLoginError("");
  };

  const continueOnPressHandler = () => {
    dispatch(signInAction(email));
  };

  useEffect(() => {
    if (error) {
      setEmailLoginError(error);
      dispatch(clearErrors());
    }

    if (success) {
      navigate("/app");
      dispatch({ type: SIGNIN_RESET });
    }
  }, [dispatch, error, navigate, success]);

  if (isAuthenticated && user) {
    navigate("/app");
  }
  return (
    <div className="flex-col flex flex-1 justify-center items-center overflow-hidden">
      <div className="flex w-full h-24 justify-end pt-5 pr-5">
        <AiOutlineClose
          size={30}
          className="text-gray-300 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div class="flex flex-col w-full h-96 justify-center items-center">
        <p className="text-4xl font-bold text-black heading">Log In</p>
        <p className="text-lg text-gray-400 pt-4 heading">Enter your email</p>
        <p
          className={`w-6/12 pb-1 text-sm input-heading ${
            emailLoginError ? `text-red-600` : `text-gray-500`
          }`}
        >
          Email
        </p>
        <input
          value={email}
          onChange={(e) => emailOnChangeHandler(e)}
          className={`bg-gray-100 w-6/12 h-10 pl-3 pr-3 input outline-none ${
            emailLoginError ? `border-2 border-red-500` : ``
          }`}
        />

        {emailLoginError ? (
          <p className="email-error">{emailLoginError}</p>
        ) : (
          ``
        )}

        <div className="flex flex-row w-10/12 justify-around mt-4 pt-4 my-buttons-container">
          <MyButton
            {...props}
            title="Back"
            className="border-2 border-gray-200 mt-4 p-2.5 h-12 pl-5 pr-5 rounded-md cursor-pointer back-button"
            textStyle="text-black font-bold back-button"
            onPress={() => navigate("/app/auth/sign-in")}
            loading={false}
          />

          <MyButton
            {...props}
            title="Continue"
            className={`${
              loading
                ? `bg-gray-200 cursor-progress`
                : `bg-blue-500 cursor-pointer hover:bg-blue-700`
            } mt-4 ml-12 p-3 pl-5 pr-5 rounded-md ${
              loading ? `p-3 pl-[2.9rem] pr-[2.9rem] mt-4` : ``
            }`}
            textStyle="text-white font-bold"
            onPress={(e) => (loading ? null : continueOnPressHandler())}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
