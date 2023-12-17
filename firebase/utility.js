
import { db } from "./firebase-config";

import { doc , setDoc } from "firebase/firestore";



export const addData = async (data) => {


  


 
  
  await setDoc(doc(db, "examifyr", "examdata"), {data});


  alert("data uploaded")

};
