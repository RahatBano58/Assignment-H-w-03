import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-orange-600 py-2">
      <nav className="container mx-auto px-4">
        <ul className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <li className="text-3xl md:text-4xl font-extrabold font-serif text-white">
            <Link href="/" className="hover:underline">Dream Bean Café</Link>
          </li>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link href="/" className="text-white hover:underline text-lg md:text-xl">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:underline text-lg md:text-xl">
                About
              </Link>
            </li>
            <li>
              <Link href="/menu" className="text-white hover:underline text-lg md:text-xl">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:underline text-lg md:text-xl">
                Contact Us
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
