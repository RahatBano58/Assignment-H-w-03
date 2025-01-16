import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <section className="text-white text-center bg-slate-500 h-full py-4 px-4 sm:px-6 md:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4">Our Menu</h1>
        <p className="text-base sm:text-lg md:text-2xl font-serif py-3">
          Welcome to Dream Bean Cafe, where coffee is more than just a drink—it's an experience. Nestled in the heart of
          Paris, we take pride in combining sophistication with a cozy atmosphere, ensuring every visit feels special.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          {/* Espresso Section */}
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <img
              src="/espresso.jpeg"
              width={300}
              height={300}
              alt="espresso"
              className="w-full md:w-60 lg:w-72 h-auto"
            />
            <div className="text-left">
              <h2 className="font-bold text-xl sm:text-2xl md:text-2xl underline">Espressos</h2>
              <p className="text-sm sm:text-base md:text-lg">A rich, strong coffee for a quick energy boost.</p>
            </div>
          </div>

          {/* Cappuccino Section */}
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <img
              src="/cappuccino.jpeg"
              width={300}
              height={300}
              alt="cappuccino"
              className="w-full md:w-60 lg:w-72 h-auto"
            />
            <div className="text-left">
              <h2 className="font-bold text-xl sm:text-2xl md:text-2xl underline">Cappuccino</h2>
              <p className="text-sm sm:text-base md:text-lg">A smooth blend of coffee and frothy milk.</p>
            </div>
          </div>

          {/* Latte Section */}
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <img
              src="/latte coffee.jpeg"
              width={300}
              height={300}
              alt="latte coffee"
              className="w-full md:w-60 lg:w-72 h-auto"
            />
            <div className="text-left">
              <h2 className="font-bold text-xl sm:text-2xl md:text-2xl underline">Latte</h2>
              <p className="text-sm sm:text-base md:text-lg">Our signature latte with creamy milk and a touch of sweetness.</p>
            </div>
          </div>

          {/* Black Coffee Section */}
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4">
            <img
              src="/black coffee.webp"
              width={300}
              height={300}
              alt="black coffee"
              className="w-full md:w-60 lg:w-72 h-auto"
            />
            <div className="text-left">
              <h2 className="font-bold text-xl sm:text-2xl md:text-2xl underline">Black Coffee</h2>
              <p className="text-sm sm:text-base md:text-lg">Adventure in life is good; consistency in coffee even better.</p>
            </div>
          </div>
        </div>
      </section>
      <Link href="/" className="block text-blue-400 hover:underline mt-4 text-lg">
        Back to Home
      </Link>
    </div>
  );
};

export default Menu;
