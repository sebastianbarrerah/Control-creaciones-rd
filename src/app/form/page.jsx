'use client'
export default function pageFormulario() {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { nombre, producto, precio, fecha, descripcion } = e.target;
        const name = nombre.value;
        const product = producto.value;
        const price = precio.value;
        const date = fecha.value;
        const description = descripcion.value;

        const response = await fetch('https://bd-control.onrender.com/ventas', {
            method: 'POST',
            body: JSON.stringify({name, product, price, date, description}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data, "Esto es post antes");
        console.log("Se realizo con exito");
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center w-[60%] gap-3 bg-slate-600 rounded-3xl mx-auto h-[80%] mt-10 justify-center">
            <h2 className="text-4xl text-bold text-slate-100 font-bold mb-8 mt-4 w-full text-center">Ponga la venta aquí</h2>
            <label className="text-neutral-200 text-xl w-[40%] text-center">Nombre cliente</label>
            <input type="text" className="w-[50%] h-10 rounded-xl px-2 py-1 text-slate-950" name="nombre" />

            <label className="text-neutral-200 text-xl w-[40%] text-center">Producto</label>
            <input type="text" className="w-[50%] h-10 rounded-xl px-2 py-1 text-slate-950" name="producto" />

            <label className="text-neutral-200 text-xl w-[40%] text-center">Fecha</label>
            <input type="date" className="w-[50%] h-10 rounded-xl px-2 py-1 text-slate-950" name="fecha" />

            <label className="text-neutral-200 text-xl w-[40%] text-center">Precio</label>
            <input type="number" className="w-[50%] h-10 rounded-xl px-2 py-1 text-slate-950" name="precio" />

            <label className="text-neutral-200 text-xl w-[40%] text-center">Descripción</label>
            <textarea rows="3" className="rounded-xl px-2 py-1 text-slate-950 w-[50%]" name="descripcion"></textarea>

            <button className="p-2 bg-slate-400 text-slate-950 rounded-xl w-[40%] my-5 hover:bg-slate-100 hover:text-blue-950 font-bold" >Crear</button>
        </form>
    )
}
