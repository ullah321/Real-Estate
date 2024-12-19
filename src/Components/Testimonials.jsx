import { assets, testimonialsData } from "./assets/assets";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="container mx-auto py-10  overflow-hidden px-6 md:px-20 lg:px-20" id="Testimonials" style={{width: '100%'}}>
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-3">Customer <span className="underline underline-offset-4 under decoration-1 font-light">Reviews</span></h1>
      <p className="text-center text-sm mx-auto max-w-60 text-gray-500 mb-8">Real Stories From Those Who Found Home With Us</p>

      <div className="flex flex-wrap gap-8 justify-center mt-16 mb-20">
        {testimonialsData.map((testimonial, index) => (
            <div key={index} className="max-w-[320px] border shadow-lg px-6 py-8 rounded text-center">
                <img className="w-12 h-12 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.alt} />
                <h2 className="text-lg text-gray-700 font-medium">{testimonial.name}</h2>
                <p className="text-gray-400 mb-3 text-sm">{testimonial.title}</p>
                <div className="flex justify-center mb-4 gap-1 text-red-500">
                    {Array.from({length: testimonial.rating}, (item,index) => (
                      <img src={assets.star_icon} key={index} alt="" className="w-3" />
                    ))}
                </div>
                <p className="text-gray-500 text-sm">{testimonial.text}</p>
            </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials
