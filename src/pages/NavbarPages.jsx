import React, { useState } from 'react';
import Navbar from '../layouts/navbar/Navbar';

const NavbarPages = () => {

  const [active, setActive] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarItems = ['Home', 'About', 'Contact', 'Login'];
  
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div>
      
    <Navbar
    active={active}
    setActive={setActive}
    isMenuOpen={isMenuOpen}
    setIsMenuOpen={setIsMenuOpen}
    navbarItems={navbarItems}
    toggleMenu={toggleMenu}

    /> 
    </div>
  );
}

export default NavbarPages;



