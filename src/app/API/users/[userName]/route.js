import { NextResponse } from "next/server"


// using params method data receive

//using params method
//http://localhost:3000/API/users/SHAHZAIB


export const GET = (req,route) =>{
    console.log('route.params', route.params)
    return NextResponse.json({message: "Get reques in userName using params method", message:"users section dynamic data send using " ,data: route.params.userName})
}