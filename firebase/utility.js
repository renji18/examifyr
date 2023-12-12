import { collection,addDoc } from "firebase/firestore";
import { db } from "./firebase-config";






const CollectionRef = collection(db,"examifyr")


export  const addData = async (data) => {


   await addDoc(CollectionRef,{data})


 
}