import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Section 1 - Header */}
      <section className="font-serif text-left justify-center bg-slate-800 text-white py-6 px-4 md:px-12 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold ml-4 sm:ml-10 md:ml-16 py-4">
          Dream Bean Café
        </h1>
        <img
          src="/coffee 1.jpeg"
          width={300}
          height={200}
          alt="coffee"
          className="w-full sm:w-64 md:w-80 lg:w-96 mx-auto py-4"
        />
        <p className="text-lg sm:text-xl md:text-2xl font-serif ml-4 sm:ml-10 md:ml-16 mt-2 px-3">
          Welcome to Granduer, a cosy and modern cafe located in the heart of Paris.<br /><br />
          We offer a wide range of coffee beans, from the most delicious to the most robust and a selection of coffees from around the world.
        </p>
        <button className="text-white bg-orange-600 text-lg sm:text-xl md:text-2xl font-serif mt-4 px-6 ml-4 sm:ml-10 md:ml-16 py-2 rounded-lg">
          Contact Us
        </button>
      </section>

      {/* Section 2 - Belief */}
      <section className="font-serif bg-slate-700 text-white py-12 px-4 md:px-12 lg:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          WE BELIEVE IN COFFEE THAT TASTES <br /> INCREDIBLE
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
          Every cup we brew reflects our passion for quality, using beans from the finest coffee farms. <br />
          From rich espressos to smooth lattes, we deliver a satisfying coffee experience perfect for <br />
          jump-starting your day or relaxing with friends.
        </p>
        <img
          src="/hot-coffee.jpg"
          width={400}
          height={300}
          alt="latte coffee"
          className="w-full sm:w-80 md:w-96 lg:w-128 mx-auto py-4"
        />
      </section>

      {/* Section 3 - Menu */}
      <section className="bg-slate-600 text-white text-center py-12 px-4 md:px-12 lg:px-16">
        <button className="text-yellow-500 font-serif hover:underline text-xl sm:text-2xl md:text-3xl font-semibold py-3">
          Our Menu
        </button>
        <p className="text-lg sm:text-xl md:text-2xl py-4">
          Explore our range of coffees and treats.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-8">
          {/* Espresso */}
          <div className="text-left px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline">Espressos</h2>
            <p className="text-md sm:text-lg md:text-xl mt-2">
              A rich, strong coffee for a quick energy boost.
            </p>
            <img
              src="/espresso.jpeg"
              width={400}
              height={300}
              alt="espresso"
              className="w-full sm:w-80 md:w-96 lg:w-128 mx-auto py-4"
            />
          </div>

          {/* Cappuccino */}
          <div className="text-left px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline">Cappuccino</h2>
            <p className="text-md sm:text-lg md:text-xl mt-2">
              A smooth blend of coffee and frothy milk.
            </p>
            <img
              src="/cappuccino.jpeg"
              width={400}
              height={300}
              alt="cappuccino"
              className="w-full sm:w-80 md:w-96 lg:w-128 mx-auto py-4"
            />
          </div>

          {/* Latte */}
          <div className="text-left px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline">Latte</h2>
            <p className="text-md sm:text-lg md:text-xl mt-2">
              Our signature latte with creamy milk and a touch of sweetness.
            </p>
            <img
              src="/latte coffee.jpeg"
              width={400}
              height={300}
              alt="latte"
              className="w-full sm:w-80 md:w-96 lg:w-128 mx-auto py-4"
            />
          </div>

          {/* Black Coffee */}
          <div className="text-left px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold underline">Black Coffee</h2>
            <p className="text-md sm:text-lg md:text-xl mt-2">
              Adventure in life is good; consistency in coffee even better.
            </p>
            <img
              src="/black coffee.webp"
              width={400}
              height={300}
              alt="black coffee"
              className="w-full sm:w-80 md:w-96 lg:w-128 mx-auto py-4"
            />
          </div>
        </div>
      </section>

      {/* Section 4 - Contact */}
      <section className="font-serif text-center bg-slate-500 text-white py-12 px-4 md:px-12 lg:px-16">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl">Contact Us</h1>
        <p className="text-lg sm:text-xl md:text-2xl mt-4">
          We would love to hear from you! Please fill out the form below to get in touch.
        </p>
      </section>
    </div>
  );
}
