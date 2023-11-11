'use client'


async function totalPage() {
  const response = await fetch("https://bd-control.onrender.com/ventas")
  const data = await response.json()


  let total = 0;
  for (const calculo of data) {
    total += calculo.precio;
  }

  return (
    <section className="h-full m-10 text-center">
      <span className='text-slate-100 text-4xl pb-10 w-[30%]'>El total de todas las ventas realizadas hasta el momento es:</span>
      {
        data.map((data1) => (
          <div className="w-full mt-5 flex flex-col " key={data1.id}>
            <span className="font-bold text-2xl mt-5 text-start w-full text-slate-100" >
              {data1.id}. {data1.nombre}
            </span>
            <div className="flex gap-4 items-center">
              <span className="font-bold text-neutral-200 text-2xl">precio:</span>
              <span className="text-slate-300">{`$${data1.precio}.000.00 pesos`}</span>

            </div>
            <hr />
          </div>

        ))
      }

      <div className="flex gap-5 mt-10">
        <span className="font-bold text-3xl text-red-500">Total:</span>
        <span className="text-2xl text-slate-50">${total}.000.00</span>
      </div>

    </section>
  )
}

export default totalPage;