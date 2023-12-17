"use client"

import { doc, getDoc } from "firebase/firestore"
import React, { useEffect } from "react"
import { useState } from "react"
import { db } from "../../firebase/firebase-config"
import Link from "next/link"
import Loader from "@/components/Loader"
import Student from "@/components/Student"

const Home = () => {
  const [inputValue, setInputValue] = useState(null)
  const [studentData, setStudentData] = useState(null)
  const [data, setData] = useState(null)
  const [isStudent, setIsStudent] = useState(null)

  const showData = async () => {
    const ref = doc(db, "examifyr", "examdata")

    const docSnap = await getDoc(ref)

    const snapData = docSnap.data()

    setData(snapData.data)
  }

  const getData = () => {
    const selectedUser = data?.filter(
      (user) => user?.enrollment === Number(inputValue)
    )

    console.log(selectedUser, "inside")

    if (selectedUser?.length === 0) {
      return setIsStudent(false)
    }
    setIsStudent(true)
    setStudentData(selectedUser[0])
  }

  useEffect(() => {
    showData()
  }, [])

  console.log(studentData)
  console.log(isStudent)

  return (
    <>
      {data ? (
        <div>
          {studentData && <Student data={studentData} />}
          {isStudent === false && (
            <div>
              <p>Fuck You</p>
            </div>
          )}
          {!studentData && (
            <div>
              <input
                type="number"
                placeholder="Enrollment Id ..."
                required
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={() => getData()}>Search</button>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Home
