import React from "react";

const CoverLetterTorontoTemplate = (props) => {
  const { coverLetterData } = props;

  return (
    <div className="m-2 overflow-hidden">
      <div className="grid grid-cols-[100px_minmax(200px,_1fr)_100px]">
        <div>
          <p className="text-[7px] font-bold">{coverLetterData?.jobTitle}</p>
          <p className="text-[7px]">{coverLetterData?.email}</p>
          <p className="text-[7px]">{coverLetterData?.phone}</p>
          <p className="text-[7px] mt-1.5">{coverLetterData?.address}</p>
        </div>
        <div>
          <p className="text-3xl font-bold relative -top-2">
            {coverLetterData?.fullName}
          </p>
        </div>
      </div>

      {/* line */}
      <div className="w-[89%] h-[1px] bg-gray-100 mt-2 mb-2" />

      <div className="grid grid-cols-[100px_minmax(200px,_1fr)_100px]">
        {/* for creating column */}
        <div></div>

        <div>
          <div className="bg-black max-w-max min-w-max pl-[2px] pr-[2px]">
            <p className="text-white text-[8px]">
              {coverLetterData?.hiringManagerName ||
              coverLetterData?.companyName
                ? `To:`
                : ``}{" "}
              {coverLetterData?.hiringManagerName}
              {coverLetterData?.hiringManagerName &&
              coverLetterData?.companyName
                ? `,`
                : ``}{" "}
              {coverLetterData?.companyName}
            </p>
          </div>

          <div className="mt-3">
            <p className="text-[8px]">{coverLetterData?.letterDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTorontoTemplate;
