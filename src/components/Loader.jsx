import React from "react"
import LOADER from "../assets/loader.svg"
import Image from "next/image"

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-gray-200 flex items-center justify-center flex-col ">
      <Image
        src={LOADER}
        alt="loader"
        className="md:w-[100px] w-[80px] h-[80px] md:h-[100px] object-contain"
      />
      <p className="mt-[50px] text-2xl md:text-4xl text-red-600 font-bold text-center">
        Loading...
      </p>
    </div>
  )
}

export default Loader
