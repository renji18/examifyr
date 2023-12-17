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
      <button className="cursor-pointer" onClick={() => router.push("/")}>
        &larr;
      </button>
      {data === false ? (
        <center>
          <p>You&apos;ve either entered an incorrect enrollment number</p>
          <p>OR</p>
          <p>Your exam form has already been generated</p>
        </center>
      ) : (
        <div>
          <p>{data?.enrollment}</p>
          <p>{data?.facultyName}</p>
          <p>{data?.facultyNumber}</p>
          <p>{data?.reason}</p>
          <p>{data?.studentName}</p>
          <p>{data?.studentsNumber}</p>
        </div>
      )}
    </>
  )
}

export default Student
