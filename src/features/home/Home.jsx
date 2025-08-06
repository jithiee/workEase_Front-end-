import React, { useEffect, useState } from 'react';
import elec from './assets/elec.png';
import clean from './assets/clean.png';
import glass from './assets/glass.png';
import home from './assets/home.png';
import roof from './assets/roof.png'
import HeaderText from './HeaderText';
import Maincarousel from './Maincarousel';
import EmployeeSection from './EmployeeSection';
import AnimatedShowcase from './AnimatedShowcase';


const Home = () => {
  const images = [elec, clean, glass, home, roof];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>

      <div className="flex flex-col items-center mt-14 px-4">
        <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={images[currentIndex]}
            alt="service"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>
      </div>

      <HeaderText/>
      <Maincarousel/>
      <EmployeeSection/>
      <AnimatedShowcase/>
   
      
    </>
  );
};

export default Home;
