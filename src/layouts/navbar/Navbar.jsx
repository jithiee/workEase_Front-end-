import React, { useState } from 'react';
import logo from './assets/logo1.png';

const Navbar = ({active ,setActive ,isMenuOpen , setIsMenuOpen , navbarItems ,  toggleMenu }) => {
  

  return (
    <div className='flex justify-center mt-5 sticky top-2 z-50' >
      <nav className='w-[700px] h-[70px] bg-[#EFEFEF] rounded-full flex items-center justify-between px-8 relative'>
        <img src={logo} alt="logo" className='w-32 h-auto' loading='lazy' />
        
        {/* Desktop Menu */}
        <ul className='hidden sm:flex gap-8 font-semibold'>
          {navbarItems.map((item) => (
            <li
              key={item}
              className='cursor-pointer relative group px-2 py-1'
              onClick={() => setActive(item)}
            >
              {item}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-uniqueBlue transition-all duration-500 
                ${active === item ? 'w-full' : 'w-0 group-hover:w-full'}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className='sm:hidden p-2'
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 right-0 bg-[#EFEFEF] rounded-lg shadow-lg mt-2 sm:hidden z-10'>
            <ul className='flex flex-col gap-4 p-4 font-semibold'>
              {navbarItems.map((item) => (
                <li
                  key={item}
                  className='cursor-pointer relative group px-2 py-1'
                  onClick={() => {
                    setActive(item);
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#0a8ecf] transition-all duration-500 
                    ${active === item ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;