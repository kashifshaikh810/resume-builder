import React from "react";

import "./styles.css";

const NewYorkTemplate = (props) => {
  return (
    <div
      className="flex flex-col w-full h-[930px] 
      border-l border-gray-600 ml-5
      max-[1029px]:pl-1 pl-10 pb-10 
      unselectable
      max-[768px]:border-none
      max-[768px]:ml-0
      max-[620px]:h-[900px]
      max-[703px]:h-[880px]
      max-[610px]:h-[830px]
      max-[570px]:h-[780px]
      max-[535px]:h-[730px]
      max-[500px]:h-[680px]
      "
    >
      <div className="flex bg-white w-full max-[1029px]:w-11/12 overflow-hidden h-[900px] self-center rounded-md hover:default">
        <div className="p-14 grid grid-cols-2 gap-2 max-[880px]:pl-12 max-[830px]:pl-10">
          <p>NewYorkTemplate</p>
        </div>
      </div>
    </div>
  );
};

export default NewYorkTemplate;
