import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white font-serif px-6 py-8">
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-12">
        {/* Newsletter Section */}
        <div className="flex flex-col space-y-4 md:w-1/3">
          <h2 className="font-sans font-semibold text-2xl">Subscribe to our newsletter</h2>
          <p>Get updates on our latest offers and services.</p>
          <div className="flex space-x-4">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="p-2 w-full md:w-2/3 border-none text-black"
            />
            <button className="text-white bg-slate-900 px-4 py-2">Subscribe</button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2 md:w-1/4">
          <h3 className="font-sans font-semibold text-xl">Quick Links</h3>
          <ul>
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">Who We Are</Link>
            </li>
            <li>
              <Link href="/menu" className="hover:underline">Our Menu</Link>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div className="flex flex-col space-y-2 md:w-1/4">
          <h3 className="font-sans font-semibold text-xl">Industries</h3>
          <ul>
            <li>Beautiful Design</li>
            <li>Information Technology</li>
            <li>Making Websites</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 border-t border-gray-600 pt-4 text-center">
        <p className="text-sm">
          © 2024 Made by Rahat Bano. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
