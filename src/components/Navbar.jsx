import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className="bg-slate-300 p-5">
            <ul className="flex justify-between px-5">
                <li className="text-2xl font-bold hover:text-red-500"><Link href={"/"}>Creaciones RD</Link></li>
                <li className="text-xl hover:text-red-500"><Link href={"/"}>Lista</Link></li>
                <li className="text-xl hover:text-red-500"><Link href={"/form"}>Venta</Link></li>
                <li className="text-xl hover:text-red-500"><Link href={"/"}>Total</Link></li>
            </ul>
        </nav>
    )
}