import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import MyButton from "../../MyButton/MyButton";

const AllTemplatesMarkup = (props) => {
  return (
    <div className="bg-black h-16 flex flex-row pl-6 pr-6">
      <div className="flex flex-row items-center">
        <BiChevronLeft className="text-white text-3xl" />
        <p className="text-white text-base">Back to editor</p>
      </div>
      <div className="flex flex-row flex-1 justify-end items-center">
        <MyButton
          {...props}
          title="Download PDF"
          className="bg-blue-500 p-2 pl-6 pr-6 rounded-md hover:bg-blue-600 hover:cursor-pointer"
          textStyle="text-white font-bold text-center"
          onPress={() => {}}
          loading={false}
        />
        <MyButton
          {...props}
          title="..."
          className="bg-blue-500 ml-2 p-2 pl-4 pr-4 rounded-md hover:bg-blue-600 hover:cursor-pointer"
          textStyle="text-white font-bold text-center"
          onPress={() => {}}
          loading={false}
        />
      </div>
    </div>
  );
};

export default AllTemplatesMarkup;
