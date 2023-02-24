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
    <div className="m-6">
      <div>
        <p className="text-[12px] font-bold">{fullName}</p>
        <p className="text-[6px] relative -top-1">{jobTitle}</p>
      </div>

      <div className="grid gap-x-14 grid-cols-[200px_minmax(900px,_1fr)_100px] mt-4">
        <div>
          <p className="text-[6px] leading-3">{letterDetails}</p>
        </div>
        <div>
          <p className="text-[6px] font-bold">
            {companyName || hiringManagerName ? `To` : ``}
          </p>
          <p className="text-[6px]">{companyName}</p>
          <p className="text-[6px]">{hiringManagerName}</p>

          <div className="mt-2">
            <p className="text-[6px] font-bold">
              {fullName || jobTitle || address || phone || email ? `From` : ``}
            </p>
            <p className="text-[6px]">{fullName}</p>
            <p className="text-[6px]">{jobTitle}</p>
            <p className="text-[6px]">{address}</p>
            <p className="text-[6px]">{phone}</p>
            <p className="text-[6px] text-blue-500">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterStockholmTemplate;
