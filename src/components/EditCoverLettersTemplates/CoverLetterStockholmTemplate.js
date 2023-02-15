import React from "react";

const CoverLetterStockholmTemplate = (props) => {
  return (
    <div className="m-6">
      <div>
        <p className="text-[12px] font-bold">Muhammad Kashif</p>
        <p className="text-[7px]">job Title</p>
      </div>

      <div className="grid gap-x-14 grid-cols-[200px_minmax(900px,_1fr)_100px] mt-4">
        <div>
          <p className="text-[6px]">
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
        <div>
          <p className="text-[6px]">To</p>
          <p className="text-[6px]">company name</p>
          <p className="text-[6px]">hiring name</p>

          <div className="mt-2">
            <p className="text-[6px]">From</p>
            <p className="text-[6px]">Muhamad Kashif</p>
            <p className="text-[6px]">job Title</p>
            <p className="text-[6px]">address</p>
            <p className="text-[6px]">number</p>
            <p className="text-[6px]">email</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterStockholmTemplate;
