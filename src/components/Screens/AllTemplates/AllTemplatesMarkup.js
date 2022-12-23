import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import MyButton from "../../MyButton/MyButton";

const AllTemplatesMarkup = (props) => {
  const selectTemplatesData = [
    {
      id: 0,
      name: "Toronto",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg",
    },
    {
      id: 1,
      name: "Stockholm",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg",
    },
    {
      id: 2,
      name: "New York",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg",
    },
    {
      id: 3,
      name: "Vienna",
      uri: "https://s3.resume.io/cdn-cgi/image/format=auto,fit=scale-down,dpr=2,width=154/uploads/local_template_image/image/406/persistent-resource/vienna-resume-templates.jpg",
    },
  ];

  return (
    <div className="flex flex-1 flex-col bg-gray-500 overflow-y-hidden">
      <div className="bg-black w-full h-16 flex flex-row pl-6 pr-6 fixed">
        <div className="flex items-center">
          <div className="flex flex-row items-center hover:cursor-pointer hover:bg-gray-700 rounded-full pl-0.5 pr-2.5">
            <BiChevronLeft className="text-white text-3xl" />
            <p className="text-white text-base">Back to editor</p>
          </div>
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

      <div className="grid grid-cols-[200px_minmax(500px,_1fr)_100px] mt-12 pt-12 mb-10 pb-10">
        <div className="grid grid-cols-[200px_minmax(200px,_1fr)_100px]">
          {selectTemplatesData.map((item, index) => {
            return (
              <div key={index} className="flex flex-col w-11/12 ml-5">
                <p>{item.name}</p>
                <img src={item.uri} className="w-11/12 h-auto" />
              </div>
            );
          })}
        </div>
        <div className="flex w-11/12 overflow-y-auto">
          <img
            src="https://picsum.photos/200/300?grayscale"
            className="w-11/12 h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AllTemplatesMarkup;
