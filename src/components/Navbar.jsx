import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className="bg-slate-300 p-5">
            <ul className="flex justify-between px-5">
                <li className="text-2xl font-bold"><Link href={"/"}>Creaciones RD</Link></li>
                <li className="text-xl"><Link href={"/"}>Inicio</Link></li>
                <li className="text-xl"><Link href={"/form"}>Tarjetas</Link></li>
                <li className="text-xl"><Link href={"/"}>About</Link></li>
            </ul>
        </nav>
    )
}