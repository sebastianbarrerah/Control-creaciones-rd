'use client'
import { Link } from 'next/link'

export default function pageHome(){
  return (
    <>
      <p className="text-slate-100 text-3xl w-4/5 m-auto text-center my-10">
        Hola aqui vas a añadir todas las ventas que hagas y asi llevaremos un mejor control a fin de mes. 
      </p>

      <p className="mx-auto text-slate-100 bg-slate-700 text-center text-xl">En <strong>Lista</strong> podras tener todas las ventas realizadas hasta el momento <br />
      En <strong>Venta</strong> podras ingresar nuevas ventas <br />
      por ultimo en <strong>Total</strong> podras ver el precio total de las ventas. <br />
      Espero disfrutes este sistema y recuerda llenar todos los campos del formulario.
      </p>

      <div className="w-full flex justify-center">
        <Link href="/form">
        <button className="mt-14  px-5 py-2 bg-gray-950 text-slate-100 rounded-xl   mx-auto table:w-[20%] mobile:w-[50%] self-center content-center text-center hover:bg-red-500 " >Añadir Venta</button>
        </Link>
      </div>
    </>
  )
}