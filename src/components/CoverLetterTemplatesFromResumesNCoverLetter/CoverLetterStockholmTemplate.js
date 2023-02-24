import React from "react";

const CoverLetterStockholmTemplate = (props) => {
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
    <div className="m-3 mr-0 overflow-hidden">
      <div>
        <p className="text-[8px] font-bold">{fullName}</p>
        <p className="text-[3px] relative -top-[2px]">{jobTitle}</p>
      </div>

      <div className="grid gap-x-4 grid-cols-[120px_minmax(900px,_1fr)_100px] mt-4">
        <div>
          <p className="text-[3px] leading-[7px]">{letterDetails}</p>
        </div>
        <div>
          <p className="text-[3px] font-bold">
            {companyName || hiringManagerName ? `To` : ``}
          </p>
          <p className="text-[3px]">{companyName}</p>
          <p className="text-[3px]">{hiringManagerName}</p>

          <div className="mt-2">
            <p className="text-[3px] font-bold">
              {fullName || jobTitle || address || phone || email ? `From` : ``}
            </p>
            <p className="text-[3px]">{fullName}</p>
            <p className="text-[3px]">{jobTitle}</p>
            <p className="text-[3px]">{address}</p>
            <p className="text-[3px]">{phone}</p>
            <p className="text-[3px] text-blue-500">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterStockholmTemplate;
