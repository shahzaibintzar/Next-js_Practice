import { NextResponse } from "next/server"

// using body method data receive

//using body method
//http://localhost:3000/API/apiHtmlToJson


// Add data in postman in body =>
// {
//     "data":"any data",
//     "discription":"any discription"
// }

export const GET = () => {
  console.log('GET Request')
  let services = {
    name:'services',
    discription: 'services description',
    image: 'URL description',
  }
  return NextResponse.json(services);
}
export const POST = async (req) => {
  const body =await req.json();
  console.log('body', body)
    return NextResponse.json({message:'Hello World from server POST request ', data: body});
}
export const PUT = () => {
    return NextResponse.json({message:'Hello World from server  PUT request '})
}
export const DELETE = () => {
    return NextResponse.json({message:'Hello World from server DELETE request'})
}
// export const PATCH = () => {
//     return NextResponse.json({message:'Hello World from server  PATCH request '})
// }
// export const HEAD = () => {
//     return NextResponse.json({message:'Hello World from server HEAD request'})
// }
// export const OPTIONS = () => {
//     return NextResponse.json({message:'Hello World from server OPTIONS request'})
// }