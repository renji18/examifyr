"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Student = () => {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getData = () => {
      const localStorageData = localStorage.getItem("examifyr-students-data");
      setData(JSON.parse(localStorageData)?.data);
    };

    getData();
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-10 h-screen  w-100px bg-slate-50 flex items-center justify-center flex-col space-y-4  ">
        <div className="shadow-2xl w-[300px] h-[210px] space-y-3 sm: px-4 ">
          <button
            className="cursor-pointer  bg-red-500 w-[36px]  rounded-full   "
            onClick={() => router.push("/")}
          >
            &larr;
          </button>
          {data === false ? (
            <center>
              <p>You&apos;ve either entered an incorrect enrollment number</p>
              <p>OR</p>
              <p>Your exam form has already been generated</p>
            </center>
          ) : (
            <div className="space-y-1">
              <p className="font-semibold text-opacity-60 text-black px-2 ">
                {" "}
                𝐄𝐧𝐫𝐨𝐥𝐥𝐦𝐞𝐧𝐭: {data?.enrollment}
              </p>
              <p className=" font-semibold text-opacity-60  text-black px-2">
                𝗙𝗮𝗰𝘂𝗹𝘁𝘆 𝗡𝗮𝗺𝗲: {data?.facultyName}
              </p>
              <p className="font-semibold text-opacity-60 text-black px-2">
                𝐅𝐚𝐜𝐮𝐥𝐭𝐲 𝐍𝐮𝐦𝐛𝐞𝐫: {data?.facultyNumber}
              </p>
              <p className="font-semibold text-opacity-60 text-black px-2">
                𝐑𝐞𝐚𝐬𝐨𝐧: {data?.reason}
              </p>
              <p className="font-semibold text-opacity-60 text-black px-2">
                𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐍𝐚𝐦𝐞: {data?.studentName}
              </p>
              <p className="font-semibold text-opacity-60 text-black px-2">
                𝐒𝐭𝐮𝐝𝐞𝐧𝐭 𝐍𝐮𝐦𝐛𝐞𝐫: {data?.studentsNumber}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Student;
