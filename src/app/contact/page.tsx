import Link from "next/link"

const Contact = () => {
    return (
        <div className="font-serif text-center justify-center bg-slate-700 text-white">
            <h1 className="font-bold text-4xl">Contact Us </h1> <br />
            <p className="text-2xl">We would love to hear from you! Please fill out the form below to get in touch.</p>
            
                <form className="text-center justify-center bg-slate-600 text-black ">
                    <div className="text-center px-2 text-black">
                        <h2 className="font-bold text-2xl py-3 ">Get In Touch</h2>
                        <label htmlFor="your name">Your Name:</label><br/>
                        <input type="text" id="your name" name="your name" placeholder="Enter your name" /> <br/> <br />
                        <label htmlFor="email ">Email Address:</label><br/>
                        <input type="text" id="email" name="email" placeholder="Enter your email" /><br/> <br />
                        <label htmlFor="message">Meassage:</label><br/>
                        <input type="message"id="message" placeholder="Type your message" />
                    </div>
                </form>
             
 
            <Link href="/"></Link>
        </div>

    )
}
export default Contact