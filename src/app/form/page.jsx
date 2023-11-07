'use client'
export default function pageFormulario() {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const target = e
        console.log(e);
        console.log("No funciona");
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-[30%] gap-3 bg-slate-600 rounded-3xl mx-auto h-auto mt-20">
            <h2 className="text-4xl text-bold text-slate-100 font-bold mb-8 mt-4">Ponga la venta</h2>
            <label className="text-neutral-200 text-xl ">Nombre cliente</label>
            <input type="text"  className="w-[80%] h-10 rounded-xl px-2 py-1 text-slate-950"  name="nombre"/>

            <label className="text-neutral-200 text-xl ">Producto</label>
            <input type="text" className="w-[80%] h-10 rounded-xl px-2 py-1 text-slate-950"  name="producto"/>

            <label className="text-neutral-200 text-xl ">Fecha</label>
            <input type="text" className="w-[80%] h-10 rounded-xl px-2 py-1 text-slate-950"  name="fecha"/>

            <label className="text-neutral-200 text-xl ">Precio</label>
            <input type="text" className="w-[80%] h-10 rounded-xl px-2 py-1 text-slate-950"  name="precio"/>

            <label className="text-neutral-200 text-xl ">Descripción</label>
            <textarea rows="6" className="rounded-xl px-2 py-1 text-slate-950 w-[80%]" name="descripcion"></textarea>

            <button className="p-2 bg-slate-400 text-slate-950 rounded-xl w-1/2 my-5 hover:bg-slate-100 hover:text-blue-950" >Crear</button>
        </form>
    )
}
