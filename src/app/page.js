"use client"

import { doc, getDoc } from "firebase/firestore"
import React, { useEffect } from "react"
import { useState } from "react"
import { db } from "../../firebase/firebase-config"
import Loader from "@/components/Loader"
import { useRouter } from "next/navigation"
import "./globals.css"

const Home = () => {
  const [inputValue, setInputValue] = useState(null)
  const [data, setData] = useState(null)

  const router = useRouter()

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

    if (selectedUser?.length === 0) {
      localStorage.setItem(
        "examifyr-students-data",
        JSON.stringify({ data: false })
      )
    } else {
      localStorage.setItem(
        "examifyr-students-data",
        JSON.stringify({ data: selectedUser[0] })
      )
    }

    router.push("/student")
  }

  useEffect(() => {
    showData()
  }, [])

  return (
    <>
      {data ? (
        <div>
          <input
            type="number"
            placeholder="Enrollment Id ..."
            required
            className=""
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="" onClick={() => getData()}>
            Search
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Home
