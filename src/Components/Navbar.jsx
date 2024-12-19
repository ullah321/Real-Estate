import { useEffect, useState } from 'react';
import {assets} from '../Components/assets/assets';
import { Link } from 'react-scroll';

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
      <nav className={`${sticky ? 'dark-nav' : ''} navbar fixed w-full mx-auto flex justify-between items-center py-4 px-4 md:px-10 lg:px-20`}>
        <img src={assets.logo} alt="" className='w-24' />
        <ul className='hidden md:flex gap-10 text-white text-md'>
          <a href="Home" className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out"><Link to='Header' smooth={true} offset={0} duration={500}>Home</Link></a>
          <a href="About" className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out"><Link to='About' smooth={true} offset={-40} duration={500}>About</Link></a>
          <a href="Projects" className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out"><Link to='Projects' smooth={true} offset={10} duration={500}>Projects</Link></a>
          <a href="Testimonials" className="cursor-pointer hover:text-gray-400 transition duration-200 ease-in-out"><Link to='Testimonials' smooth={true} offset={-50} duration={500}>Testimonials</Link></a>
        </ul>
        <button className="hidden md:block bg-white px-6 py-1 rounded-full text-md">Sign up</button>
        <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} alt='' className='md:hidden cursor-pointer w-5'/>
      </nav>
            {/*---- Mobile Menu---- */}
      <div className={`md:hidden ${showMobileMenu ? 'w-48 fixed' : 'h-0 w-0'} top-0 right-0 bottom-0 overflow-hidden bg-white transition-all w-48`}>
        <div className='flex justify-end pt-5 pr-8 cursor-pointer'>
          <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} alt="" className='w-5' />
        </div>
        <ul className='flex flex-col items-center mt-10 px-6 gap-2 text-md font-medium'>
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
