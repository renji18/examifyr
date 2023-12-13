"use client"

import React from "react"
import * as xlsx from "xlsx"
import { useState } from "react"

import { addData } from "../../../firebase/utility"

const Admin = () => {
  const [data, setData] = useState(null)

  const readExcel = async (e) => {
    const file = e.target.files[0]
    const data = await file.arrayBuffer(file)
    const excelfile = xlsx.read(data)
    const excelsheet = excelfile.Sheets[excelfile.SheetNames[0]]
    const exceljson = xlsx.utils.sheet_to_json(excelsheet)

    setData(exceljson)
  }
  console.log(data)

  return (
    <div>
      admin pannel
      <br />
      <input type="file" onChange={(e) => readExcel(e)} />
      <button onClick={() => addData(data)}> Upload </button>
    </div>
  )
}

export default Admin
