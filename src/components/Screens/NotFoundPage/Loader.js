import React from "react";

import { AiOutlineReload } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="flex w-full h-[36rem] justify-center items-center">
      <AiOutlineReload
        name="AiOutlineReload"
        size={50}
        color="black"
        className="animate-spin"
      />
      <p className="ml-3 animate-pulse text-3xl">Loading...</p>
    </div>
  );
};

export default Loader;
