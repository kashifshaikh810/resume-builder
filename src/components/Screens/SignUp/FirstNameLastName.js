import React, { useState } from "react";
import Header from "../../Header/Header";
import MyButton from "../../MyButton/MyButton";
import SideDrawer from "../../SideDrawer/SideDrawer";
import "./styles.css";

const FirstNameLastName = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };
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
        <p className="text-4xl font-bold text-blue-400">Add your name</p>
        <p className="pt-5">
          You made a great template selection! Now let’s add your name to it.
        </p>
      </div>
      <div className="flex flex-1 justify-center flex-col items-center pt-5">
        <p className="w-6/12 pb-1 text-gray-500 text-sm input-heading">
          First Name
        </p>
        <input className="bg-gray-100 w-6/12 h-10 pl-3 pr-3 input" />
      </div>

      <div className="flex flex-1 justify-center flex-col items-center pt-5">
        <p className="w-6/12 pb-1 text-gray-500 text-sm input-heading">
          Last Name
        </p>
        <input className="bg-gray-100 w-6/12 h-10 pl-3 pr-3 input" />
      </div>

      <div className="flex flex-row w-full justify-evenly items-center mt-4 pt-4 buttons-container">
        <MyButton
          {...props}
          title="Back"
          className="border-2 border-gray-200 mt-4 p-3 pl-5 pr-5 rounded-md cursor-pointer back-button"
          textStyle="text-black font-bold back-button"
          onPress={() => {}}
          loading={false}
        />

        <MyButton
          {...props}
          title="Continue"
          className="bg-blue-500 mt-4 p-3 pl-5 pr-5 rounded-md cursor-pointer continue-button"
          textStyle="text-white font-bold continue-button"
          onPress={() => {}}
          loading={false}
        />
      </div>
    </div>
  );
};

export default FirstNameLastName;
