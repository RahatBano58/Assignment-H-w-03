import Link from "next/link"

const About = () => {
    return (
        <div className="bg-gray-600 text-3xl text-center font-sans">
            <h1 className= "text-white font-sans text-6xl font-extrabold text-center py-4">About Our Café </h1><br/>
            <h2 className="text-4xl text-black font-medium">Introduction</h2>
            <p className="text-2xl text-white font-sans py-2">Welcome to our charming Café, where we are deeply passionate about brewing the finest, most aromatic coffee<br/>
            for our vibrant community.Established in 2024, we've grown into a cozy and welcoming spot where you can <br/>
            enjoy handcrafted beverages and a warm, inviting atmmosphere.<br/>
            <br/>
            Our dedicated team is committed to offering you the best, most delightful experience, one cup at a time</p><br/><br/>
            <h2 className="text-4xl text-black font-medium">Services Offered</h2>
            <p className="text-2xl text-white font-sans py-2">We take pride in offering a variety of services designed to make your visit enjoyable and memorable. Whether<br/>
             you're here for a quick coffee break or a leisurely afternoon, we have something for everyone. </p>
             <br/>
             <ol>
                <ul className=" text-2xl text-white text-left font-sans px-28 py-3 list-disc">
                    <li>Handcrafted coffee brewed from freshly roasted beans</li><br/>
                    <li>A wide selection of teas and specialty drinks</li><br/>
                    <li>Freshly baked pastries and light snacks</li><br/>
                    <li>Cozy seating areas for relaxing and work</li><br/>
                    <li>Free high-speed Wi-Fi for all our guests</li><br/>
                    <li>Catering services for small events and private gatherings</li><br/>
                </ul>
             </ol>
            <br/>
            <h2 className="text-4xl text-black font-medium">Our Team</h2>
            <p className="text-2xl text-white font-sans py-1">Our team of dedicated staff is committed to creating a welcoming and enjoyable experience for our guests.We<br/>
            have a mix professional and enthusiasts who work together to bring you the best possible coffee eperience. </p>
             <br/>
        
            <Link href="/"></Link>
        </div>

    )
}
export default About