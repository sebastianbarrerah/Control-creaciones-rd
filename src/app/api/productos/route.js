import { NextResponse } from "next/server"
export async function GET() {
    try {
        const res = await fetch("https://bd-control.onrender.com/ventas");
        const data = await res.json()
        return NextResponse.json(data)
    } catch (error) {
        console.log("Error al traer elementos de la api", error);
    }
}

export async function POST(request) {
    const { name, product, price, date, description } = await request.json();
    const venta = {
        nombre:name, 
        producto: product,
        precio: price,
        fecha: date,
        descripcion: description
    }
    console.log(venta);
    return NextResponse.json()
}

Hola compañeros

