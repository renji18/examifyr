"use client"

import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

const Student = () => {
  const [data, setData] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const getData = () => {
      const localStorageData = localStorage.getItem("examifyr-students-data")
      setData(JSON.parse(localStorageData)?.data)
    }

    getData()
  }, [])

  return (
    <>
      <div className="absolute inset-0 z-10 h-screen  w-100px bg-slate-50 flex items-center justify-center flex-col space-y-4  ">
        <div className="shadow-2xl flex flex-col gap-8 sm:p-5 ">
          <div>
            <button
              className="cursor-pointer bg-red-500 px-2 md:px-4 md:pb-1 text-xl md:text-3xl rounded-full   "
              onClick={() => router.push("/")}
            >
              &larr;
            </button>
          </div>
          {data === false ? (
            <center className="text-red-500 flex flex-col gap-3 sm:text-xl">
              <p>You&apos;ve either entered an incorrect enrollment number</p>
              <p>OR</p>
              <p>Your exam form has already been generated</p>
            </center>
          ) : (
            <div className="flex flex-col gap-5">
              <p className="font-semibold sm:items-center flex flex-col sm:flex-row sm:text-lg text-opacity-60 text-black px-2 ">
                {" "}
                <span className="sm:text-xl mr-3 text-black">
                  Enrollment:
                </span>{" "}
                <span>{data?.enrollment}</span>
              </p>
              <p className=" font-semibold sm:items-center  flex flex-col sm:flex-row sm:text-lg text-opacity-60  text-black px-2">
                <span className="sm:text-xl mr-3 text-black">
                  Faculty Name:
                </span>{" "}
                <span>{data?.facultyName}</span>
              </p>
              <p className="font-semibold  sm:items-center flex flex-col sm:flex-row sm:text-lg text-opacity-60 text-black px-2">
                <span className="sm:text-xl mr-3 text-black">
                  Faculty Number:
                </span>{" "}
                <span>{data?.facultyNumber}</span>
              </p>
              <p className="font-semibold sm:items-center  flex flex-col sm:flex-row sm:text-lg text-opacity-60 text-black px-2">
                <span className="sm:text-xl mr-3 text-black">Reason:</span>{" "}
                <span>{data?.reason}</span>
              </p>
              <p className="font-semibold sm:items-center flex flex-col sm:flex-row sm:text-lg text-opacity-60 text-black px-2">
                <span className="sm:text-xl mr-3 text-black">
                  Student Name:
                </span>{" "}
                <span>{data?.studentName}</span>
              </p>
              <p className="font-semibold sm:items-center flex flex-col sm:flex-row sm:text-lg text-opacity-60 text-black px-2">
                <span className="sm:text-xl mr-3 text-black">
                  Student Number:
                </span>{" "}
                <span>{data?.studentsNumber}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Student
