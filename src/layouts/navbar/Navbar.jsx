import React from 'react';
import logo from './assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-center mt-5 '>
      <nav className='w-[700px] h-[70px] bg-[#EFEFEF] rounded-full flex items-center justify-between px-8'>
        <img src={logo} alt="logo" className='w-32 h-auto' />
        <ul className='flex gap-8 font-semibold'>
          <li className='cursor-pointer hover:text-gray-600'>About Us</li>
          <li className='cursor-pointer hover:text-gray-600'>Contact Us</li>
          <li className='cursor-pointer hover:text-gray-600'>Login</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;