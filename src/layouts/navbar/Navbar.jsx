import React, { useState } from 'react';
import logo from './assets/logo1.png';

const Navbar = () => {
const [acive , setActive ] = useState('Home')
const navbarItems = ['Home' , 'About' , 'Contact' , 'Login']

  return (
    <div className='flex justify-center mt-5 '>
      <nav className='w-[700px] h-[70px] bg-[#EFEFEF] rounded-full flex items-center justify-between px-8'>
        <img src={logo} alt="logo" className='w-32 h-auto' />
        <ul className='flex gap-8 font-semibold'>
          {
            navbarItems.map((item)=>(
              <li
              key={item}
              className='cursor-pointer relative group px-2 py-1 '
              onClick={()=> setActive(item)}
              >{item}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-[#0a8ecf] transition-all duration-500 
              ${acive === item ? 'w-full' : 'w-0 group-hover:w-full' }
              `} 
              
              ></span>
              </li>
            ))
          }
        
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;