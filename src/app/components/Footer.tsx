import Link from "next/link";
 
export default function Footer () {
    return (
        <footer className="text-left bg-slate-800 text-white font-serif flex flex-wrap text-2xl px-3 justify-evenly space-x-24">
            <div className="font-sans font-semibold py-2 gap-4">
              Subscribe to our newsletter to get updates <br/>
                <input type="text" id="email" placeholder=" Email Address" />
                <button className="text-white bg-slate-900 px-4 py-1">Subscribe</button>
            </div>  
            <div className="font-sans font-semibold py-3 gap-6"> 
            <ul >
                Quick Link<br/>
                <li>Home</li>
                <li>Who We Are</li>
                <li>Our Menu</li>   
            </ul>
            </div>

            <div className="font-sans font-semibold py-3 gap-6"> 
            <ul >
                Industries<br/>
                <li>Beautiful Design</li>
                <li>Information Technology</li>
                <li>Making Websites</li>  
            </ul>
            </div>
        <hr/>
            
            <div className="py-4 font-sans text-2xl text-center font-normal m-12">
           <p> © 2024 Made by Rahat Bano. All rights reserved</p>
            </div>
            <Link href="/"></Link>
        </footer>
    )
}