import { NextResponse } from "next/server";

async function pageData( { params }) {
    const id = params.id;
    const res = await fetch(`https://bd-control.onrender.com/ventas/${id}`)
    const data = await res.json()
    
  return (
    <div className="p-5 bg-slate-200 rounded-lg w-[40%] text-2xl flex flex-col mx-auto   mt-10" >
              <span className="w-full font-bold text-3xl">{data.id}</span>
              <div className="flex" >
                <span className="w-[40%]"><strong >Nombre:</strong></span>
                <span className="text-start w-1/2">{data.nombre ? data.nombre : "No aplica"}</span>
              </div>
              <div className="flex">
                <span className="w-[40%]"><strong >Producto:</strong></span>
                <span className="text-start w-1/2">{data.producto ? data.producto : "No aplica"}</span>

              </div>
              <div className="flex">
                <span className="w-[40%]"><strong >Precio:</strong></span>
                <span className="text-start w-1/2">{data.precio ? `$ ${data.precio}` : "No aplica"}</span>

              </div>
              <div className="flex">
                <span className="w-[40%]"><strong >Fecha:</strong></span>
                <span className="text-start w-1/2">{data.fecha ? data.fecha : "No aplica"}</span>

              </div>
              <div className="flex">
                <span className="w-[40%]"><strong >Descripción:</strong></span>
                <span className="text-start w-1/2">{data.descripcion ? data.descripcion : "No aplica"}</span>

              </div>
            </div>
  )
}

export default pageData