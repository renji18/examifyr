"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendData } from "@/redux/slice/dataSlice";

function DataComponent() {
  const dispatch = useDispatch();
  const storedata = useSelector((state) => state.data);
  console.log(storedata);

  const handleStoreData = () => {
    const newData = { sssss: "bhjm" };

    dispatch(sendData(newData));
  };

  return (
    <div>
      <button onClick={handleStoreData}>Store Data</button>
    </div>
  );
}

export default DataComponent;
