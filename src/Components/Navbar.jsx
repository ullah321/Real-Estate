import { useEffect, useState } from 'react';
import {assets} from '../Components/assets/assets';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [showMobileMenu]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);



  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <nav className={`${sticky ? 'dark-nav' : ''} fixed w-full mx-auto flex justify-between items-center py-6 px-6 md:px-20 lg:px-20`}>
        <img src={assets.logo} alt="" />
        <ul className='hidden md:flex gap-10 text-white text-lg'>
          <a href="#Header" className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out">About</a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out">Projects</a>
          <a href="#Testimonials" className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out">Testimonials</a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt='' className='md:hidden cursor-pointer w-7'/>
      </nav>
            {/*---- Mobile Menu---- */}
      <div className={`md:hidden ${showMobileMenu ? 'w-72 fixed' : 'h-0 w-0'} top-0 right-0 bottom-0 overflow-hidden bg-white transition-all w-72`}>
        <div className='flex justify-end pt-8 pr-12 cursor-pointer'>
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-6' />
        </div>
        <ul className='flex flex-col items-center mt-10 px-6 gap-2 text-lg font-medium'>
          <a onClick={() => setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block hover:text-gray-500'>Home</a>
          <a onClick={() => setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block hover:text-gray-500'>About</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block hover:text-gray-500'>Projects</a>
          <a onClick={() => setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block hover:text-gray-500'>Testimonials</a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
