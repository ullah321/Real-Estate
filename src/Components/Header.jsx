import Navbar from "./Navbar";
import { motion } from "motion/react";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" style={{backgroundImage: "url('header_img.png')"}} id="Header">
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="header container mx-auto text-center text-white py-4 px-6 md:px-20 lg:px-32">
            <h2 className="text-4xl sm:text-5xl md:text-[60px] inline-block max-w-3xl pt-20 font-semibold">Explore homes that fit your dreams</h2>
            <div className="hero-btn space-x-3 mt-16 ">
                <a href="#Projects" className="border border-white px-8 py-2 rounded"><Link to='Projects' smooth={true} offset={-100} duration={500}>Projects</Link></a>
                <a href="#Contact" className="border border-blue-500 bg-blue-500 px-8 py-2 rounded"><Link to='Contact' smooth={true} offset={-20} duration={500}>Contact</Link></a>
            </div>
        </motion.div>
      <Navbar />
    </div>
  )
}

export default Header
