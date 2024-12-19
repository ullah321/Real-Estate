import { Link } from "react-scroll";
import { assets } from "./assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 mx-auto bg-gray-900 overflow-hidden pb-8" id="Footer" style={{width: '100%'}}>
      <div className="px-4 md:px-20 lg:px-20 mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src={assets.logo_dark} alt="" className="w-24" />
            <p className="text-gray-400 mt-4 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sed debitis sit! Illo, nobis impedit autem maxime ex dolor possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eveniet.</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-md font-bold mb-4">Company</h3>
          <ul className="flex flex-col text-gray-400 gap-2">
            <a href="#Header" className="hover:text-white text"><Link to="Header" smooth={true} offset={0} duration={500}>Home</Link></a>
            <a href="#About" className="hover:text-white"><Link to="About" smooth={true} offset={0} duration={500}>About Us</Link></a>
            <a href="#Contact" className="hover:text-white"><Link to="Contact" smooth={true} offset={0} duration={500}>Contact Us</Link></a>
            <a href="#" className="hover:text-white"><Link to="Header" smooth={true} offset={-30} duration={500}>Privacy Policy</Link></a>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-md font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-80 text-sm">The latest news,articles and resources send to your inbox weekly.</p>
          <div className="flex gap-2">
            <input type="email" name="Email" placeholder="Email" className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-400 w-full md:w-auto" />
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-gray-400 pt-6 mt-14 text-center text-md font-medium">
        Copyright 2024 @ Real Estate. All Right Reserved.
      </div>
    </div>
  );
}

export default Footer
