import Image from "next/image";
import Link from "next/link";
import { Container } from "postcss";

export default function Home() {
  return (
    <div>
    <section className="font-serif text-left justify-center bg-slate-800 text-white">
      <h1 className="text-5xl font-extrabold ml-16 py-4 ">Dream Bean Café</h1>
      <img src="/coffee 1.jpeg" width={300} height={200} alt="coffee" className="px-4 py-4" />
      <p className="text-2xl font-serif ml-16 mt-2 px-3">Welcome to Granduer, a cosy and modern cafe located in the heart of Paris.<br /><br />
          We offer a wide range of coffee beans,<br />
          from the most delicious to the most robust 
          and a selection of coffees from around the world.
          
      </p>
      <button className="text-white bg-orange-600 text-2xl font-serif mt-4 font-normal px-6 ml-10 border:rounded-lg py-1 mb-6 justify-center">
        Contact Us
      </button>
    </section>

    <section className="font-serif text-right justify-center bg-slate-700 text-white py-12">
      <h2 className="font-serif text-center font-bold text-3xl justify-center">WE BELIEVE IN COFFEE THAT TASTES <br /> INCREDIBLE</h2>
      
      <p className="font-serif text-center font-medium text-black text-2xl justify-center py-3">Every cup we brew reflect our passion for quality. using beans from the finest coffee farms. <br /> 
      From rich espressos to smooth latters, we deliver a satisfying coffee experience perfect for <br />
      jump-starting your day or relaxing with friends</p>
      <img src="/hot-coffee.jpg" width={400} height={300} alt="latte coffee" className="px-4 py-4" />
    </section>

    <section className="text-3xl bg-slate-600  text-center text-white">
        <button className="text-yellow-500 font-serif hover:underline  justify-center font-semibold py-3">Our Menu</button>
        <br />
          <p className="py-4">Explore our range of coffees and treats.</p>
          <br />
            <div className="font-serif text-3xl px-5">
              <h2 className="font-bold text-left underline">Espressos</h2>
              <p className="text-md text-left">A rich, strong coffee for a quick energy boost</p>
              <img src="/espresso.jpeg" width={400} height={300} alt="espresso" className="px-4 py-4" />
              </div>

              <div className="font-serif text-3xl px-5 ">
              <h2 className="font-bold text-left underline">Cappuccino</h2>
              <p className="text-md text-left ">A smooth blend of coffee and frothy milk.</p>
              <img src="/cappuccino.jpeg" width={400} height={300} alt="cappuccino" className="px-4 py-4" />
              </div>

              <div className="font-serif text-3xl px-5 ">
              <h2 className="font-bold text-left underline">Latte</h2>
              <p className="text-md text-left ">Our signature latte with creamy milk and a touch of sweetness.</p>
              <img src="/latte coffee.jpeg" width={400} height={300} alt="latte coffee" className="px-4 py-4" />
              </div>

              <div className="font-serif text-3xl px-5 ">
              <h2 className="font-bold text-left underline">Black Coffee</h2>
              <p className="text-md text-left ">Adventure in life is good; consistency in coffee even better..</p>
              <img src="/black coffee.webp" width={400} height={300} alt="latte coffee" className="px-4 py-4" />
              </div>
                        
    </section>

    <section className="font-serif text-center justify-center bg-slate-500 text-white py-12"> 
      <h1 className="font-bold text-4xl">Contact Us </h1> <br />
      <p className="text-2xl">We would love to hear from you! Please fill out the form below to get in touch.</p>
    </section>
    
    </div>

    
  );
}
