import { NextResponse } from "next/server"

export const GET = () =>{
    return NextResponse.json({messageGET:"todo section dynamic data send using "})
}
// using query method data receive

//using query method
//http://localhost:3000/API/todo?title="shahzaib"


export const POST = (req) =>{
const title = new URL(req.url).searchParams.get('title')
    return NextResponse.json({messagePOST:"todo section dynamic data send using query mathod", data:title})
}