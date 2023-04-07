import React from "react";

const TemplateLoader = () => {
  const data = [
    {
      style:
        "bg-gray-100 w-5/12 h-4 mt-10 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-3/12 h-2 mt-2 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-10/12 h-2 mt-5 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-10/12 h-2 mt-2 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-10/12 h-2 mt-2 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-10/12 h-2 mt-2 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-10/12 h-2 mt-4 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-10/12 h-2 mt-2 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-10/12 h-2 mt-2 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-10/12 h-2 mt-2 rounded-[1px] animate-pulse self-center",
    },
    {
      style:
        "bg-gray-100 w-5/12 h-2 mt-2 rounded-[1px] animate-pulse self-start ml-8",
    },
  ];
  return (
    <div className="flex flex-1 flex-col">
      {data.map((item, i) => {
        return <div key={i} className={item.style} />;
      })}
    </div>
  );
};

export default TemplateLoader;
