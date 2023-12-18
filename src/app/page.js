"use client";

import { doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase/firebase-config";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

const Home = () => {
  const [inputValue, setInputValue] = useState(null);
  const [data, setData] = useState(null);

  const router = useRouter();

  const showData = async () => {
    const ref = doc(db, "examifyr", "examdata");
    const docSnap = await getDoc(ref);
    const snapData = docSnap.data();
    setData(snapData.data);
  };

  const getData = () => {
    const selectedUser = data?.filter(
      (user) => user?.enrollment === Number(inputValue)
    );

    if (selectedUser?.length === 0) {
      localStorage.setItem(
        "examifyr-students-data",
        JSON.stringify({ data: false })
      );
    } else {
      localStorage.setItem(
        "examifyr-students-data",
        JSON.stringify({ data: selectedUser[0] })
      );
    }

    router.push("/student");
  };

  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      {data ? (
        <div className="fixed inset-0 z-10 h-screen w-100px bg-slate-50 flex flex-col items-center justify-center   ">
          <div className="  flex   items-center justify-center    ">
            <input
              type="number"
              placeholder="Enrollment No..."
              required
              onChange={(e) => setInputValue(e.target.value)}
              className="px-4 py-2 bg-gray-100 text-black rounded-l-md focus:outline-none   border-2 border-black sm:w-auto sm:mb-0 sm:mr-2 "
            />
            <button
              className="px-4 py-2  bg-red-500 text-white rounded-r-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 sm:w-auto "
              onClick={() => getData()}
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
