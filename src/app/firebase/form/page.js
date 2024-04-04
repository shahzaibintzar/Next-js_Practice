'use client'
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from "react"
import { db } from "../../../../config/firebasedb";

export default function page() {
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [course, setCourse] = useState("")

const onsubmithandler = async () => {
   let student ={
    name: name,
    email: email,
    course: course
   }
   try {
  const collectionpath = collection(db, "students")
  await addDoc(collectionpath, student)
  console.log("Document written with ID: ",);
} catch (e) {
  console.error("Error adding document: ", e);
}
}


  return (
    <div>
    <h1>Apply form</h1>

    <input type="text" placeholder="Enter your Name" onChange={(e) => setName(e.target.value)}/>
    <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
    <input type="text" placeholder="Enter your Course" onChange={(e) => setCourse(e.target.value)}/>
    <button onClick={onsubmithandler}>Submit</button>
    </div>
  )
}
