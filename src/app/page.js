"use client"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { collection, getDocs } from "firebase/firestore"

import { sendData } from "@/redux/slice/dataSlice"
import { db } from "../../firebase/firebase-config"
import { useEffect } from "react"

function DataComponent() {
  const dispatch = useDispatch()
  const storeData = useSelector((state) => state?.data)

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "examifyr"))
      const documents = []
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data() })
      })

      dispatch(sendData(documents))
    } catch (error) {
      console.error("Error fetching data from Firebase:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [dispatch])
  console.log(storeData)
  return (
    <div>
      <button>submit</button>
    </div>
  )
}

export default DataComponent
