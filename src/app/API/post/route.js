import { NextResponse } from "next/server"

var posts = [
    {
        'id':1,
        'title': 'next.js 12',
        'description':'next js 12 course description', 
        'image': 'next js 12url.png',
    },
     {
        'id':2,
        'title': 'next.js 13',
        'description':'next js 13 course description',
        'image': 'next js 13url.png',

    },
     {
        'id':3,
        'title': 'next.js 14',
        'description':'next js 14 course description',
        'image': 'next js 14url.png',

    },
     {
        'id':4,
        'title': 'next.js 14.1',
        'description':'next js 14.1 course description',
        'image': 'next js 14.1url.png',
 
    },
]

export const GET = () =>{
    return NextResponse.json(posts)
}


export const POST = async (req) =>{
    let body = await req.json()

    posts.push(body)

    return NextResponse.json({message:"user successfully added"})
}



export const DELETE = (req) =>{
    const id =  new URL(req.url).searchParams.get('id')

    posts = posts.filter((post) => post.id != id)
  

    return NextResponse.json({message:"user successfully Deleted"})
}



export const PUT = async (req) => {
    const body = await req.json()

    posts = posts.map((post) =>{
        if(post.id == body.id){
            return body
        }
        return post
    })

    return NextResponse.json({message:"user successfully updated"})
}