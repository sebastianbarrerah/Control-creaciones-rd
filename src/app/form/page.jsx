'use client'

import { GET } from "../api/producto/route";

export default function pageFormulario() {
    
    const handleSubmit = (e) => {
    e.preventDefault()
        const { nombre, producto, precio, fecha, descripcion } = e.target
        console.log(nombre, producto, precio, fecha, descripcion);
        const venta = {
            name: nombre.value,
            product: producto.value,
            price: precio.value,
            date: fecha.value,
            description: descripcion.value
        }
        
        try {
            const response = fetch("@/app/api/producto",{
                method: "POST",
                headers: "Content-type: application/json",
                body: venta
            })
            const data = response.json()
            console.log("enviado con exito");
            return data

        } catch (error) {
            console.log(error, "ocurrio un error");
        }

      
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center w-[60%] gap-3 bg-slate-600 rounded-3xl mx-auto h-[80%] mt-10 justify-center">
            <h2 className="text-4xl text-bold text-slate-100 font-bold mb-8 mt-4 w-full text-center">Ponga la venta aquí</h2>
            <label className="text-neutral-200 text-xl w-[40%] text-center">Nombre cliente</label>
            <input type="text"  className="w-[50%] h-10 rounded-xl px-2 py-1 text-slate-950"  name="nombre"/>

            <label className="text-neutral-200 text-xl w-[40%] text-center">Producto</label>
            <input type="text" className="w-[50%] h-10 rounded-xl px-2 py-1 text-slate-950"  name="producto"/>

            <label className="text-neutral-200 text-xl w-[40%] text-center">Fecha</label>
            <input type="date" className="w-[50%] h-10 rounded-xl px-2 py-1 text-slate-950"  name="fecha"/>

            <label className="text-neutral-200 text-xl w-[40%] text-center">Precio</label>
            <input type="number" className="w-[50%] h-10 rounded-xl px-2 py-1 text-slate-950"  name="precio"/>

            <label className="text-neutral-200 text-xl w-[40%] text-center">Descripción</label>
            <textarea rows="3" className="rounded-xl px-2 py-1 text-slate-950 w-[50%]" name="descripcion"></textarea>

            <button className="p-2 bg-slate-400 text-slate-950 rounded-xl w-[40%] my-5 hover:bg-slate-100 hover:text-blue-950 font-bold" >Crear</button>
        </form>
    )
}
