import Link from "next/link"

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li className="text-gray-800 font-sans font-bold justify-evenly flex text-3xl space-x-4 bg-orange-600 py-2 w-full px-1">


                        <Link href="/logo" className="text-white text-left font-serif font-extrabold bg-orange-600 py-1 px-1 min-full text-4xl hover:text-white hover:underline">Dream Bean Café</Link>
                        
                        <Link href="/" className="text-right hover:text-white hover:underline">Home</Link>

                        <Link href="/about" className="text-right hover:text-white hover:underline">About</Link>

                        <Link href="/menu" className="text-right hover:text-white hover:underline">Menu</Link>
                    
                        <Link href="/contact" className="text-right hover:text-white hover:underline">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}