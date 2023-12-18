"use client";

import React from "react";
import * as xlsx from "xlsx";
import { useState } from "react";

import { addData } from "../../../firebase/utility";

const Admin = () => {
  const [data, setData] = useState(null);

  const readExcel = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer(file);
    const excelfile = xlsx.read(data);
    const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]];
    const exceljson = xlsx.utils.sheet_to_json(excelsheet);

    setData(exceljson);
  };
  console.log(data);

  return (
    <div className="absolute inset-0 z-10 h-screen  w-100px bg-slate-50 flex items-center justify-center flex-col space-y-4">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold  text-black">Admin Panel</h2>
        <input
          type="file"
          onChange={(e) => readExcel(e)}
          className="mb-2 p-2 w-[250px] ml-[127px]  "
        />
        <button
          className="bg-red-500 text-white w-[80px] px-4 py-2 rounded"
          onClick={() => {
            data != null && addData(data);
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Admin;
