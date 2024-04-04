'use client'

import { useEffect, useState } from "react"
import { collection, getDocs ,query , where , doc ,deleteDoc,updateDoc} from "firebase/firestore"; 
import { db } from "../../../../config/firebasedb";


export default function page() {
const [student, setStudent] =useState([])
const [id , setId] = useState("")
const [loader, setLoader] = useState('false')
const fetchStudents = async () =>{
try {
    const collectionname = collection(db, "students")

    // using where query
    // const querywhereref = query(collectionname,where('email','==','shahzaibintzar27346@gmail.com'))
// const docs = await getDocs(querywhereref)
const docs = await getDocs(collectionname)
const studentsData = []
docs.forEach((doc) =>{
    studentsData.push({
        id:doc.id,
        ...doc.data()})
})
console.log('students', studentsData)
setStudent(studentsData)

} catch (error) {
    console.log("error",error)
}

}

    useEffect(()=>{
        fetchStudents()
    },[])

const studentdeletehandler = async (id) =>{
const deleteref = doc(db, "students", id)
  try {
    setLoader(true)
      await deleteDoc(deleteref)
const newStudent = student.filter((item) => item.id)
setId(id)
setLoader(false)
setStudent(newStudent)
  } catch (error) {
    console.log('error', error)
  }
}




const onUpdatehandler = async (id) =>{
    //          tabnine suggestions
    // const updateref = doc(db, "students", id)
    // try {
    //     setLoader(true)
    //     await updateDoc(updateref, {
    //         name: "<NAME>",
    //     })
    //     const newStudent = student.filter((item) => item.id)
    //     setId(id)
    //     setLoader(false)
    //     setStudent(newStudent)
    // } catch (error) {
    //     console.log('error', error)
    // }


    try {
        const updateref = doc(db, "students" , id)
          setId(id)
        setLoader(true)
        await updateDoc(updateref, {
            name: "Ahmed"
        })
        fetchStudents()
        setLoader(false)
    } catch (error) {
        console.log('error', error)
    }
}
  return (
    <div>
    <h1>List of students</h1>
    <table>
    <tr>
    <th>Student ID</th>
    <th>Student Name</th>
    <th>Student Email</th>
    <th>Student Cource</th>
    <th>Student Delete</th>
    <th>Student Update</th>
    </tr>
    {student?.map((item)=>{
        return(
            <>
            <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.course}</td>
            <td><button onClick={()=>studentdeletehandler(item.id)}>{ item.id == id && loader ? "loading...":"delete"}</button></td>
            <td><button onClick={()=>onUpdatehandler(item.id)}>{ item.id == id && loader ? "loading...":"Update"}</button></td>
            </tr>
            </>
        )
    })}
    </table>
    </div>
  )
}
