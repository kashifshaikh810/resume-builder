import React from "react";

const CoverLetterNewYorkTemplate = (props) => {
  const {
    fullName,
    jobTitle,
    address,
    email,
    phone,
    companyName,
    hiringManagerName,
    letterDetails,
  } = props?.coverLetterData;

  return (
    <div className="m-6 w-full">
      <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
        <div>
          <p>Muhammad Kashif</p>
          <p className="text-[5px]">1</p>
        </div>
        <div className="w-[1px] h-[29rem] bg-black relative -left-12" />
        <div className="w-full relative -left-[9rem]">
          <p className="text-[5px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterNewYorkTemplate;
