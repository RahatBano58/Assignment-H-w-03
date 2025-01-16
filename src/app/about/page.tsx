import Link from "next/link";

const About = () => {
  return (
    <div className="bg-gray-600 text-center font-sans px-4 py-8 md:px-8 lg:px-20">
      {/* Heading */}
      <h1 className="text-white font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl py-4">
        About Our Café
      </h1>

      {/* Introduction Section */}
      <div className="py-6">
        <h2 className="text-3xl md:text-4xl text-black font-medium">
          Introduction
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white py-4 leading-relaxed">
          Welcome to our charming Café, where we are deeply passionate about
          brewing the finest, most aromatic coffee for our vibrant community.
          Established in 2024, we've grown into a cozy and welcoming spot where
          you can enjoy handcrafted beverages and a warm, inviting atmosphere.
          <br />
          <br />
          Our dedicated team is committed to offering you the best, most
          delightful experience, one cup at a time.
        </p>
      </div>

      {/* Services Offered Section */}
      <div className="py-6">
        <h2 className="text-3xl md:text-4xl text-black font-medium">
          Services Offered
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white py-4">
          We take pride in offering a variety of services designed to make your
          visit enjoyable and memorable. Whether you're here for a quick coffee
          break or a leisurely afternoon, we have something for everyone.
        </p>
        <ul className="list-disc text-lg md:text-xl lg:text-2xl text-white text-left py-4 px-6 md:px-12 lg:px-28 space-y-4">
          <li>Handcrafted coffee brewed from freshly roasted beans</li>
          <li>A wide selection of teas and specialty drinks</li>
          <li>Freshly baked pastries and light snacks</li>
          <li>Cozy seating areas for relaxing and work</li>
          <li>Free high-speed Wi-Fi for all our guests</li>
          <li>Catering services for small events and private gatherings</li>
        </ul>
      </div>

      {/* Our Team Section */}
      <div className="py-6">
        <h2 className="text-3xl md:text-4xl text-black font-medium">Our Team</h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white py-4 leading-relaxed">
          Our team of dedicated staff is committed to creating a welcoming and
          enjoyable experience for our guests. We have a mix of professionals
          and enthusiasts who work together to bring you the best possible
          coffee experience.
        </p>
      </div>
    </div>
  );
};

export default About;
