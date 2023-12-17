import React from "react"
import LOADER from "../assets/loader.svg"
import Image from "next/image"

const Loader = () => {
  return (
    <div className="fixed inset-0 z-10 h-screen bg-my-light dark:bg-my-dark flex items-center justify-center flex-col">
      <Image
        src={LOADER}
        alt="loader"
        className="w-[100px]  h-[100px] object-contain"
      />
      <p className="mt-[20px] font-hel text-4xl text-violet-600 font-bold text-center">
        Loading...
      </p>
    </div>
  )
}

export default Loader
