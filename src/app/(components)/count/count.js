"use client"
//   conditional rendering

import { useState } from "react";

export default function Count() {
    // var count = 0;
    const [count, setCount] = useState(0);
    const incrementHandler = () =>{
        // count = count + 1;
        setCount(count + 1);

    }
    const decrementHandler = () =>{
        // count = count - 1;
       if(count > 0){
         setCount(count - 1);
       }
    }
    const resetHandler = () =>{
        // count = 0;
        setCount(0);
    }
  return (
    <>
    <button onClick={decrementHandler} className="h-10 w-10 bg-slate-600">-</button>
    <span className="h-10 w-10">{count}</span>
    <button onClick={incrementHandler} className="h-10 w-10 bg-slate-600">+</button>
{
    count != 0  &&     <button onClick={resetHandler} className="h-10 w-40 bg-slate-600 ml-10">Reset</button>

}    </>
  )
}
