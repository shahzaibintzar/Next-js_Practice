import { NextResponse } from "next/server"

import {userModel} from '../../model/users'
import dbConnect from '../../../../config/db'


dbConnect()

export const GET = async (req, route) =>{
    try {
    const data = await userModel.find()
    return NextResponse.json({message:"success ",users:data})

    } catch (error) {
    return NextResponse.json({message:"error ",error})

    }
}