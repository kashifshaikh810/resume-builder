import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { signUpAction } from "../../../redux/actions/authAction";

import Header from "../../Header/Header";
import MyButton from "../../MyButton/MyButton";
import SideDrawer from "../../SideDrawer/SideDrawer";
import "./styles.css";

const EmailScreen = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailErr, setShowEmailErr] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.userSignUp
  );

  const { firstName, lastName } = useParams();

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  const emailOnChangeHandler = (e) => {
    setEmail(e.target.value);
    setShowEmailErr("");
  };

  const continuePressHandler = (e) => {
    e.preventDefault();
    if (!email) {
      setShowEmailErr("This field is required");
    } else {
      dispatch(signUpAction(firstName, lastName, email));
    }
  };

  console.log(loading, isAuthenticated, user, error);
  return (
    <div>
      <Header {...props} openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
      {toggleDrawer ? (
        <SideDrawer
          {...props}
          openDrawer={openDrawer}
          toggleDrawer={toggleDrawer}
        />
      ) : (
        <></>
      )}

      <div className="flex flex-1 justify-center items-center mt-5 flex-col two-headings">
        <p className="text-4xl font-bold text-blue-400">
          Supply contact information
        </p>
        <p className="pt-5 w-6/12 text-center sub-title">
          It’s important to let employers know how to contact you. Enter your
          email address below.
        </p>
      </div>

      <div className="flex flex-1 justify-center flex-col items-center pt-5">
        <p
          className={`w-6/12 pb-1 text-sm input-heading ${
            showEmailErr ? `text-red-600` : `text-gray-500`
          }`}
        >
          Email
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => emailOnChangeHandler(e)}
          className={`bg-gray-100 w-6/12 h-10 pl-3 pr-3 input outline-none ${
            showEmailErr && `border-2 border-red-500`
          }`}
        />
        {showEmailErr && <p className="email-error">{showEmailErr}</p>}
      </div>

      <div className="flex flex-row flex-1 justify-evenly mt-4 pt-4 buttons-container">
        <MyButton
          {...props}
          title="Back"
          className="border-2 border-gray-200 mt-4 p-3 pl-5 pr-5 rounded-md cursor-pointer back-button"
          textStyle="text-black font-bold back-button"
          onPress={() => navigate("/create-resume/introduction")}
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
          onPress={(e) => (loading ? null : continuePressHandler(e))}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default EmailScreen;
