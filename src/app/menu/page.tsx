import Link from "next/link"

const Menu = () => {
    return (
        
        <div>
            <section className="text-white text-center justify-items-center bg-slate-500 h-full py-4" >
                <h1 className=" text-center justify-items-center bg-transparent text-5xl font-bold">Our Menu</h1>
                <p className=" text-2xl py-3 font-serif ">Welcome to Dream Bean Cafe, where coffee is more than just a drink-it's an <br/>
                experience.Nestled in the heat of Paris, we take pride in combining sophistication <br/>
                with a cozy atmosphere,ensurining every visit feel special.</p>
                <br/><br/>

        
            <div className="font-serif text-3xl px-3 flex flex-row gap-4 ">
               <img src="/espresso.jpeg" width={300} height={300} alt="espresso" className="px-4 py-4" />
              <h2 className="font-bold text-left underline">Espressos</h2>
              <p className="text-md text-left ">A rich, strong coffee for a quick energy boost</p>
              
              </div>

              <div className="font-serif text-3xl px-3 flex flex-row gap-4 "> 
              <img src="/cappuccino.jpeg" width={300} height={300} alt="cappuccino" className="px-4 py-4" />
              <h2 className="font-bold text-left underline">Cappuccino</h2>
              <p className="text-md text-left ">A smooth blend of coffee and frothy milk.</p>
              
              </div>

              <div className="font-serif text-3xl px-3 flex flex-row gap-4  ">
              <img src="/latte coffee.jpeg" width={300} height={300} alt="latte coffee" className="px-4 py-4" />
              <h2 className="font-bold text-left underline">Latte</h2>
              <p className="text-md text-left ">Our signature latte with creamy milk and a touch of sweetness.</p>
              
              </div>

              <div className="font-serif text-3xl px-3 flex flex-row gap-4 ">
              <img src="/black coffee.webp" width={300} height={300} alt="latte coffee" className="px-4 py-4" />
              <h2 className="font-bold text-left underline">Black Coffee</h2>
              <p className="text-md text-left ">Adventure in life is good; consistency in coffee even better..</p>
              
              </div>
            </section>
               <Link href="/"></Link>
            
        </div>

    )
}
export default Menu