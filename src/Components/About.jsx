import { assets } from "./assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      className="flex flex-col items-center justify-center w-full overflow-hidden p-14 md:px-20 lg:px-32 container mx-auto" id="About">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 under decoration-1 font-light">Our Brand</span></h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">Passionate about Properties, Dedicated to Your Vision</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
        <div className="flex flex-col items-center md:items-start text-gray-600 mt-10">
            <div className="grid grid-cols-2 gap-6 md:gap-10 2xl:pr-28 w-full">
                <div>
                    <p className="text-4xl font-medium text-gray-800">10+</p>
                    <p>Years of experience</p>
                </div>
                <div>
                    <p className="text-4xl font-medium text-gray-800">12+</p>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <p className="text-4xl font-medium text-gray-800">20+</p>
                    <p>Mn. Sq. Ft. Delivered</p>
                </div>
                <div>
                    <p className="text-4xl font-medium text-gray-800">25+</p>
                    <p>Ongoing Projects</p>
                </div>
            </div>
            <p className="my-10 max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae ratione minus velit, provident blanditiis accusantium veritatis aliquid odio voluptatibus eum quasi sapiente dolore cumque ex, iste expedita fugit asperiores voluptatum.</p>
            <button className="bg-blue-600 text-white py-2 px-8 rounded font-medium">Learn More</button>
        </div>
      </div>
    </motion.div>
  );
}

export default About
