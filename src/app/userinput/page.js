'use client'

import { useState } from "react"

export default function userinput() {
const [username, setUsername] = useState('')
const [useremail, setUseremail] = useState('')

const [usernumber, setUsernumber] = useState('')


    const onChangeHandler = (e)=>{
        console.log('onChangeHandler', e.target.value)
        setUsername(e.target.value)
    }
   
    const onEnterphoneHandler = (e)=>{
        console.log('onEnterphoneHandler', e.target.value)
        setUsernumber(e.target.value)
    }
  return (
      <div>
      <hr/>
      <h1>user name = {username}</h1>
      <input onChange={(e) =>onChangeHandler(e)} type="text" placeholder='inter your Name'/>
      <hr/>
      <input onChange={(e) =>setUseremail(e.target.value)} type="email" placeholder='inter your email'/>
      <h1>user email = {useremail}</h1>
            <hr/>
      <input onChange={onEnterphoneHandler} type="number" placeholder='inter your phone'/>
      <h1>user number = {usernumber}</h1>
    </div>
  )
}
