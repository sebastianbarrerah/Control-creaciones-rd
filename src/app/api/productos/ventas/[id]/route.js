import { NextResponse } from "next/server"
export async function GET(request, {params}){
        const id = params.id
        console.log(id);
        const response = fetch(`https://bd-control.onrender.com/ventas/${id}`)
        const data = await response.json()
        return NextResponse.json(data)
}
