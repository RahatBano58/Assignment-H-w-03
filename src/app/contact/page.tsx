import Link from "next/link";

const Contact = () => {
  return (
    <div className="font-serif text-center justify-center bg-slate-700 text-white py-8 px-4 md:px-12 lg:px-24">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl py-4">Contact Us</h1>
      <p className="text-lg md:text-xl lg:text-2xl mb-6">
        We would love to hear from you! Please fill out the form below to get in touch.
      </p>

      <form className="bg-slate-600 text-left p-6 rounded-md mx-auto max-w-lg">
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white py-3 text-center">Get In Touch</h2>
          
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg md:text-xl">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="p-2 rounded-md border-none w-full"
            />
          </div>
          
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg md:text-xl">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 rounded-md border-none w-full"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg md:text-xl">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message"
              className="p-2 rounded-md border-none w-full"
            ></textarea>
          </div>

          <button className="bg-slate-900 text-white py-2 px-4 mt-4 rounded-md w-full text-lg md:text-xl hover:bg-slate-800">
            Submit
          </button>
        </div>
      </form>

      <Link href="/" className="block mt-6 text-lg md:text-xl text-blue-400 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default Contact;
