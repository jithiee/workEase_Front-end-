import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import electro from './assets/el.jpeg';
import Plumber from './assets/Plumber.jpeg';
import Cleaner from './assets/Cleaner.jpeg';
import Repairs from './assets/Repairs.jpeg';
import Energy from './assets/Energy.jpeg';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CAROUSEL_DATA = [
  { tag: 'New', title: 'Book a Plumber', image: Plumber },
  { tag: 'Popular', title: 'Hire an Electrician', image: electro },
  { tag: 'Verified', title: 'Find a Home Cleaner', image: Cleaner },
  { tag: 'Updated', title: 'Glass & Window Repairs', image: Repairs },
  { tag: 'Trusted', title: 'Roof Maintenance Experts', image: Energy },
];

const Maincarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const slidesRef = useRef([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize GSAP animations
  useEffect(() => {
    const setupAnimation = () => {
      const slides = slidesRef.current.filter(Boolean);
      const container = containerRef.current;
      
      if (!slides.length || !container) return;

      // Clear any existing animations
      if (animationRef.current) {
        animationRef.current.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }

      // Mobile behavior - vertical stacking
      if (isMobile) {
        const totalHeight = slides.reduce((acc, slide) => {
          return acc + slide.offsetHeight + 32; // 32px gap between slides
        }, 0);

        gsap.set(container, {
          width: '100%',
          height: totalHeight,
          display: 'flex',
          flexDirection: 'column'
        });

        // Create timeline for vertical scrolling
        animationRef.current = gsap.timeline({
          scrollTrigger: {
            trigger: carouselRef.current,
            pin: true,
            scrub: 0.5,
            start: "top top",
            end: () => `+=${totalHeight}`,
            onUpdate: (self) => {
              const slideHeights = slides.map(slide => slide.offsetHeight + 32);
              let accumulatedHeight = 0;
              let activeIndex = 0;
              
              for (let i = 0; i < slideHeights.length; i++) {
                accumulatedHeight += slideHeights[i];
                if (self.scroll() <= accumulatedHeight / totalHeight) {
                  activeIndex = i;
                  break;
                }
              }
              setCurrentSlide(activeIndex);
            }
          }
        });

        // Add animations for each slide when it comes into view
        slides.forEach((slide, index) => {
          gsap.fromTo(
            slide.querySelector('img'),
            { scale: 1.1, opacity: 0.7 },
            {
              scale: 1,
              opacity: 1,
              scrollTrigger: {
                trigger: slide,
                start: "top 70%",
                end: "bottom 30%",
                scrub: true
              }
            }
          );
        });

        return;
      }

      // Desktop behavior - horizontal scrolling
      const slideWidth = slides[0].offsetWidth;
      const totalWidth = slideWidth * slides.length + 16 * (slides.length - 1);

      gsap.set(container, {
        width: totalWidth,
        height: 'auto',
        display: 'flex',
        flexDirection: 'row'
      });

      // Create horizontal scrolling timeline
      animationRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: carouselRef.current,
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (slides.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0,
            ease: "power1.inOut"
          },
          start: "top top",
          end: () => `+=${totalWidth - window.innerWidth}`,
          onUpdate: (self) => {
            const progress = self.progress;
            const slideIndex = Math.round(progress * (slides.length - 1));
            setCurrentSlide(slideIndex);
          }
        }
      });

      // Horizontal movement animation
      animationRef.current.to(container, {
        x: () => -(totalWidth - window.innerWidth),
        ease: "none"
      });

      // Add scale and opacity animations for each slide
      slides.forEach((slide, index) => {
        gsap.fromTo(
          slide,
          { scale: 0.9, opacity: 0.7 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: slide,
              start: "left center",
              end: "right center",
              scrub: true
            }
          }
        );
      });
    };

    const ctx = gsap.context(() => {
      setupAnimation();
    }, carouselRef);

    return () => {
      ctx.revert(); // Cleanup all GSAP animations and ScrollTriggers
    };
  }, [isMobile]);

  // Handle dot navigation click
  const goToSlide = (index) => {
    const slides = slidesRef.current.filter(Boolean);
    if (!slides.length) return;

    if (isMobile) {
      // Mobile - vertical scrolling
      let scrollPosition = carouselRef.current.offsetTop;
      for (let i = 0; i < index; i++) {
        scrollPosition += slides[i].offsetHeight + 32;
      }
      
      gsap.to(window, {
        scrollTo: {
          y: scrollPosition,
          autoKill: false
        },
        duration: 0.8,
        ease: "power2.inOut"
      });
    } else {
      // Desktop - horizontal scrolling
      const slideWidth = slides[0].offsetWidth + 16;
      const scrollPosition = index * slideWidth;
      
      gsap.to(containerRef.current, {
        x: -scrollPosition,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <div className="w-full py-10 md:py-20 px-4">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Your Home Services, Simplified
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Explore and book top-rated professionals around you.
        </p>
      </div>

      {/* Scrollable Carousel Section */}
      <div ref={carouselRef} className="relative">
        <div className={`relative ${isMobile ? 'min-h-[70vh]' : 'h-[60vh] md:h-[80vh]'} overflow-hidden`}>
          <div 
            ref={containerRef}
            className={`${isMobile ? 'flex-col space-y-8' : 'flex-row gap-4'} flex items-center will-change-transform`}
          >
            {CAROUSEL_DATA.map((item, index) => (
              <div
                key={index}
                ref={el => (slidesRef.current[index] = el)}
                className={`${isMobile ? 'w-full' : 'flex-shrink-0'} flex items-center justify-center px-2`}
              >
                <div className={`bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-md md:shadow-xl w-full ${
                  isMobile ? 'max-w-md mx-auto' : 'w-[280px] sm:w-[320px]'
                } transition-all duration-300 ${
                  currentSlide === index ? 'scale-[1.02] md:scale-105 shadow-lg md:shadow-2xl z-10' : 'scale-95 z-0'
                }`}>
                  <div className="flex justify-between items-center mb-2">
                    {item.tag && (
                      <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700 font-medium">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl md:rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mt-3 md:mt-4 text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {CAROUSEL_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-gray-800 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maincarousel;