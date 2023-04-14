import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  signInWithFacebook,
  signInWithGoogle,
} from "../../../redux/actions/authAction";

import AppButton from "../../AppButton/AppButton";
import "./styles.css";

const LoginDashboard = (props) => {
  const [emailHover, setEmailHover] = useState("");
  const navigate = props?.navigate();
  const dispatch = useDispatch();

  const facebookOnClickHandler = () => {
    dispatch(signInWithFacebook());
  };

  const googleOnClickHandler = () => {
    dispatch(signInWithGoogle());
  };

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
        <p className="text-4xl font-bold text-black">Log In</p>
        <p className="text-lg text-gray-400 pt-4">
          We are happy to see you back!
        </p>

        <div className="flex flex-row">
          <AppButton
            {...props}
            title="Email"
            iconName="email"
            onMouseEnter={() => setEmailHover(!emailHover)}
            onMouseLeave={() => setEmailHover(!emailHover)}
            iconStyle="mr-8"
            iconContainerStyle="flex flex-row items-center"
            className={`border  mt-5 p-3 pl-5 pr-10 mr-4 rounded-md cursor-pointer ${
              emailHover ? `border-blue-300` : `border-gray-200`
            }`}
            textStyle={`font-bold ${
              emailHover ? `text-blue-500` : `text-black`
            }`}
            onPress={() => navigate("/app/auth/log-in")}
            loading={false}
          />

          <AppButton
            {...props}
            title="Google"
            iconName="google"
            iconStyle="mr-8"
            iconContainerStyle="flex flex-row items-center"
            className="bg-red-500 mt-5 p-3 pl-5 pr-10 mr-4 rounded-md cursor-pointer hover:bg-red-600"
            textStyle="text-white font-bold"
            onPress={() => googleOnClickHandler()}
            loading={false}
          />

          <AppButton
            {...props}
            title="Facebook"
            iconName="facebook"
            iconStyle="mr-8"
            iconContainerStyle="flex flex-row items-center"
            className="bg-blue-500 mt-5 p-3 pl-5 pr-10 mr-4 rounded-md cursor-pointer hover:bg-blue-600"
            textStyle="text-white font-bold"
            onPress={() => facebookOnClickHandler()}
            loading={false}
          />
        </div>

        <div className="flex flex-row pt-5">
          <p className="text-base text-gray-400">I am not registered —</p>
          <p
            className="text-base pl-1 text-blue-400 sign-up-text"
            onClick={() => navigate("/app/create-resume/social-profile")}
          >
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDashboard;
