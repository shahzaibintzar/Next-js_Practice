import { NextResponse } from "next/server";
import {ProductModel} from "../../model/products";
import dbConnect from '../../../../config/db'


dbConnect()

export const POST = async (req) =>{

    try {
            const body = await req.json();
    console.log('body', body)
   


    if (body.title && body.discription && body.phone) {
        const product = new ProductModel(body)
        await product.save()
        return NextResponse.json({message:'success products created',});
    }   

    // some working
    return NextResponse.json({message:'All params required  , price ,discription ,phone',});
    } catch (error) {
     return NextResponse.json({message:'something went wrong ', ERROR: error});

    }

}