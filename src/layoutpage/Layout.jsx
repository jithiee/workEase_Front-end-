import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/footer/Footer';
import NavbarPages from '../pages/NavbarPages';



const NavbarPage = () => {
  return (
    <div>

      <NavbarPages/>
      <Outlet/>
      <Footer/>
      
    </div>
  );
}

export default NavbarPage;
