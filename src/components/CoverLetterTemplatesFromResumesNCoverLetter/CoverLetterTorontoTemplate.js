import React from "react";

const CoverLetterTorontoTemplate = (props) => {
  const { coverLetterData } = props;

  return (
    <div className="m-2 overflow-hidden">
      <div className="grid grid-cols-[60px_minmax(200px,_1fr)_100px]">
        <div>
          <p className="text-[3px] font-bold">{coverLetterData?.jobTitle}</p>
          <p className="text-[3px]">{coverLetterData?.email}</p>
          <p className="text-[3px]">{coverLetterData?.phone}</p>
          <p className="text-[3px] mt-1">{coverLetterData?.address}</p>
        </div>
        <div>
          <p className="text-base font-bold relative -top-1 w-4/12">
            {coverLetterData?.fullName}
          </p>
        </div>
      </div>

      {/* line */}
      <div className="w-[100%] h-[1px] bg-gray-100 mt-1.5 mb-1.5" />

      <div className="grid grid-cols-[60px_minmax(200px,_1fr)_100px]">
        {/* for creating column */}
        <div></div>

        <div>
          <div className="bg-black max-w-max min-w-max pl-[2px] pr-[2px]">
            <p className="text-white text-[4px]">
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

          <div className="mt-1.5">
            <p className="text-[3.5px]">{coverLetterData?.letterDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTorontoTemplate;
