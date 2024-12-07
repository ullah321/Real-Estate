import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";


const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6611d360-ba53-48e0-81dc-2d12f8847779");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Sent Message Succesfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.success);
      setResult("");
    }
  };


  return (
    <motion.div 
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-3">Contact <span className="underline underline-offset-4 under decoration-1 font-light">With Us</span></h1>
      <p className="text-center mx-auto max-w-80 text-gray-500 mb-8">Ready To Make a Move? Let`s Build Your Future Together</p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto pt-8 text-gray-600">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input type="tex" placeholder="Your Name" required name="Name" className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:shadow-md"/>
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input type="email" placeholder="Your Email" required name="Email" className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-1 focus:ring-blue-300 focus:shadow-md" />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea className="w-full mt-2 border border-gray-300 rounded py-3 px-4 h-48 resize-none focus:outline-none focus:ring-1 focus:ring-blue-300 focus:shadow-md " name="Message" placeholder="Enter your message" required></textarea>
        </div>
        <button className="bg-blue-600 text-white py-3 px-6 rounded">
          {result ? result : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
}

export default Contact
