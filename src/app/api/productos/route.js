import { NextResponse } from "next/server"
// let ventas = []
export function GET(request){
    
        return NextResponse.json(request)

        // const data =  NextResponse.json({})
        // return data;
   
}

export async function POST(request){
    const { venta } = await request.json();
    // ventas.push(venta)
    return NextResponse.json()
}



