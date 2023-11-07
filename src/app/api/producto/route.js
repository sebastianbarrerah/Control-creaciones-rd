import { NextResponse } from "next/server"
export function GET(request){
    return NextResponse.json({error: "ninguno", nombre: "sebastian"})
}