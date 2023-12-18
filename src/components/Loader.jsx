import React from "react";
import LOADER from "../assets/loader.svg";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-gray-200 flex items-center justify-center flex-col ">
      <Image
        src={LOADER}
        alt="loader"
        className="w-[100px] bg-red-400   h-[100px] object-contain"
      />
      <p className="mt-[20px] font-hel text-4xl text-red-600 font-bold text-center">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
