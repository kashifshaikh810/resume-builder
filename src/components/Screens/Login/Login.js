import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import MyButton from "../../MyButton/MyButton";

const Login = (props) => {
  const [email, setEmail] = useState("");
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
        <p className="text-4xl font-bold text-black heading">Log In</p>
        <p className="text-lg text-gray-400 pt-4 heading">Enter your email</p>
        <p className={`w-6/12 pb-1 text-sm text-gray-400 input-heading`}>
          Email
        </p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`bg-gray-100 w-6/12 h-10 pl-3 pr-3 input`}
        />

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
            className="bg-blue-500 mt-4 p-2.5 h-12 pl-5 pr-5 rounded-md cursor-pointer continue-button"
            textStyle="text-white font-bold"
            onPress={(e) => {}}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
