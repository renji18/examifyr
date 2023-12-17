"use client";

import {
  query,
  where,
  onSnapshot,
  collection,
  doc,
  getDoc,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase/firebase-config";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [studentData, setStudentData] = useState(null)

  const [data, setData] = useState("");

  const showData = async () => {
    const ref = doc(db, "examifyr", "examdata");


  

    const docSnap = await getDoc(ref);

    const snapData = docSnap.data();


    setData(snapData.data)


   

   
  };


  console.log(data)

  console.log(studentData)

  const getData = ()=>{


    const selectedUser = data?.filter(user => user?.enrollment === Number(inputValue)) 




    setStudentData(selectedUser[0])


    

    







  }


  useEffect(()=>{


    showData()

  },[])

  return (
    <>
      <input
        type="text"
        placeholder="Enrollment Id ..."
        required
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={()=>getData()}>Search</button>
    </>
  );
};

export default Home;
