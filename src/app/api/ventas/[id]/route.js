import { NextResponse } from "next/server"

export async function GET (request, { params }){
    try {
        const id = Number(params.id)
        const res = await fetch(`https://bd-control.onrender.com/ventas/${id}`)
        const data = await res.json()
        return NextResponse.json(data)
        
    } catch (error) {
        console.log(error);
    }
}

async function listVentas() {
    const dataFunction = await GET()
    return(
        <>
            {
                dataFunction.map((element) => (
                    <div>
                        {element.nombre}
                    </div>       
                ))
            }
        </>
        
    )
}

export default listVentas;