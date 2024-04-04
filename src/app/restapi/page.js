'use client'
import axios from "axios"
import { useState } from "react"
export default function restapi() {

const [data, setData] =useState([])
    const loadDataFromServer = async () =>{


        //               fetch mathod
    //    let response = await fetch('https://api.github.com/users/naveed-rana')
    //    response = await response.json()
    //    console.log('response', response)




    //                 Axios method
    // let response = await axios.get('https://api.github.com/users/naveed-rana')
    // console.log('response', response.data)
    // setData(response.data)




    let response = await axios.get('https://api.github.com/users/naveed-rana/followers')
    console.log('response', response.data)
    setData(response.data)



    }
  return (
   <>
    <div>RestApi</div>
    // <h1>userName ==== {data.name} followers === {data.followers} </h1>

    {data?.map((item,i)=>{
      return(
        <div key= {i}>
        <h1>follower Name == {item.login}</h1>
        </div>
      )
    })}

    <button onClick={loadDataFromServer}>fetch Data</button>
   </>
  )
}
