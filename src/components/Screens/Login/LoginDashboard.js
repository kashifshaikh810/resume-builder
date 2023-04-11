import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MyButton from "../../MyButton/MyButton";
import "./styles.css";

const LoginDashboard = (props) => {
  const navigate = props?.navigate();
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
          <MyButton
            {...props}
            title="Email"
            className="border-2 border-gray-200 mt-4 p-3 pl-10 pr-10 mr-4 rounded-md email-button"
            textStyle="text-black font-bold email-button"
            onPress={() => navigate("/app/auth/log-in")}
            loading={false}
          />

          <MyButton
            {...props}
            title="Google"
            className="border-2 border-gray-200 mt-4 p-3 pl-10 pr-10 mr-4 rounded-md email-button"
            textStyle="text-black font-bold email-button"
            onPress={() => {}}
            loading={false}
          />

          <MyButton
            {...props}
            title="Facebook"
            className="border-2 border-gray-200 mt-4 p-3 pl-10 pr-10 mr-4 rounded-md email-button"
            textStyle="text-black font-bold email-button"
            onPress={() => {}}
            loading={false}
          />
        </div>

        <div className="flex flex-row pt-5">
          <p className="text-base text-gray-400">I am not registered —</p>
          <p
            className="text-base pl-1 text-blue-400 sign-up-text"
            onClick={() => navigate("/create-resume/introduction")}
          >
            Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDashboard;
