"use client"

import { useEffect, useState } from "react"

export default  function mongoClient () {
const[data, setData] = useState([])


    const fetchUsers = async ()=>{
const response = await fetch("http://localhost:3000/API/mongoClint")
const result = await response.json()
console.log('result', result)
    setData(result.users)

    }
  useEffect(()=>{
    fetchUsers();
  },[])
  return (<>
    <div>mongo</div>
    {data?.map((item,i) =>{
      return(
        <div key= {i}>
        <h1>{item.firstName}-{item.lastName}</h1>
        </div>
      )
    })}
    </>
  )
}
