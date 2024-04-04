'use client'
import { useState } from "react"
export default function loops() {
    const userName =['Ali','Ahmed','Shahzaib','Waleed','Imtiaz','Subhan','Samiullah']
    const [students,setStudents] =useState( [
        {
        userName : `Hello ${userName[0]}`,
        age : 20,
        city : 'ggg'
        },
        {
        userName : 'Ahmed',
        age : 21,
        city : 'hh'
        },
        {
        userName : 'Shahzaib',
        age : 23,
        city : 'bhh'
        },
        {
        userName : 'Waleed',
        age : 24,
        city : 'hkh'
        },
        {
        userName : 'Imtiaz',
        age : 25,
        city : 'ryyu'
        },
        {
        userName : 'Subhan',
        age : 26,
        city : 'lkhfd'
        },
        {
        userName : 'Samiullah',
        age : 27,
        city : 'lkhfd'
        }
        ])

        const deletehandler = (studentsage) =>{
         let  restStudent = students.filter((student)=> {
             if(student.age !== studentsage){

                 return student
             }
           })
        setStudents(restStudent)

        }
  return (
    
    <>
    <div>
    {userName.map((userName,index, array )=>{
        return(<>
            <h1>Loops   {userName} ---index{index} ---array{array}</h1>
            </>)
    })}
    </div>
    <hr/>
    {students.map((item) => {
        return(
            <>
            <h1>student Name: {item.userName}</h1>
            <h1>student age: {item.age}</h1>
            <h1>student city: {item.city}</h1>
            <hr/>
            </>
        )
    })}

    <hr/>
    <table>
    <tr>
    <th>student Name</th>
    <th>student roll</th>
    <th>student city</th>
    <th>student delete</th>
    </tr>
    {students.map((students,i) =>{
        return(
            <tr ket={i}>
            <td>{students.userName}</td>
            <td>{students.age}</td>
            <td>{students.city}</td>
            <td><button onClick={()=>deletehandler(students.age)}>Delete</button></td>
            </tr>
        )
    })}
    </table>

    
    </>
  )
}
