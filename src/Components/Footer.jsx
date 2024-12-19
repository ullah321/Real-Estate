import { assets } from "./assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 mx-auto bg-gray-900 overflow-hidden pb-8" id="Footer" style={{width: '100%'}}>
      <div className="px-4 md:px-20 lg:px-20 mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <img src={assets.logo_dark} alt="" />
            <p className="text-gray-400 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sed debitis sit! Illo, nobis impedit autem maxime ex dolor possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eveniet.</p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col text-gray-400 gap-2">
            <a href="#Header" className="hover:text-white">Home</a>
            <a href="#About" className="hover:text-white">About Us</a>
            <a href="#Contact" className="hover:text-white">Contact Us</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-80">The latest news,articles and resources send to your inbox weekly.</p>
          <div className="flex gap-2">
            <input type="email" name="Email" placeholder="Email" className="p-2 rounded bg-gray-800 border border-gray-700 text-gray-400 w-full md:w-auto" />
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-gray-400 pt-6 mt-14 text-center text-lg font-medium">
        Copyright 2024 @ Real Estate. All Right Reserved.
      </div>
    </div>
  );
}

export default Footer
