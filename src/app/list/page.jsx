'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";

export function listPage() {
  const [datApi, setdatApi] = useState([])
  const router = useRouter()

  useEffect(() => {
    const getData = async() => {
        const response = await fetch("https://bd-control.onrender.com/ventas");
        const data = await response.json()
        console.log(data, "no sirve");
        setdatApi(data)
        getData()
      }
  }, [])

  return (
    <>
      <h1 className="w-full text-center text-4xl text-slate-100 font-semibold py-5 pt-10">Lista de ventas del mes</h1>
      <section className="w-full flex flex-wrap pt-10 gap-3 mb-2">
        {
          datApi.map((item) => (
            <div key={item.id} className="p-5 bg-slate-200 rounded-lg w-[30%] flex flex-col mx-auto hover:opacity-60 cursor-pointer" 
            onClick={() => router.push(`../api/ventas/${item.id}`)}>
              <span className="w-full font-bold text-3xl">{item.id}</span>
              <div className="flex" >
                <span className="w-[40%]"><strong >Nombre:</strong></span>
                <span className="text-start w-1/2">{item.nombre ? item.nombre : "No aplica"}</span>
              </div>
              <div className="flex">
                <span className="w-[40%]"><strong >Producto:</strong></span>
                <span className="text-start w-1/2">{item.producto ? item.producto : "No aplica"}</span>

              </div>
              <div className="flex">
                <span className="w-[40%]"><strong >Precio:</strong></span>
                <span className="text-start w-1/2">{item.precio ? `$ ${item.precio}` : "No aplica"}</span>

              </div>
              <div className="flex">
                <span className="w-[40%]"><strong >Fecha:</strong></span>
                <span className="text-start w-1/2">{item.fecha ? item.fecha : "No aplica"}</span>

              </div>
              <div className="flex">
                <span className="w-[40%]"><strong >Descripción:</strong></span>
                <span className="text-start w-1/2">{item.descripcion ? item.descripcion : "No aplica"}</span>

              </div>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default listPage;