'use client';
import React, { useEffect, useState } from 'react'

const AnnouncementBar: any = () => {
  return (
    <div className="w-full  bg-black py-2">
      <div className="container mx-auto flex items-center justify-center px-8">
        <span className="text-center text-sm font-medium tracking-wide text-white">
          FREE SHIPING ON ORDERS OVER 20.00$ X FREE RETURNS
        </span>
      </div>
    </div>
  );
};

const Header = () => {
    const  [isOpen,setIsOpen] = useState<boolean>(false);
    const [prevScrollY,setPrevScrollY] = useState<number>(0)

         useEffect(() => {
           const handleScroll = () => {
             const currentScrollY = window.scrollY;
             const scrolledUp = currentScrollY < prevScrollY;

             if (scrolledUp) {
               setIsOpen(true);
             } else if (currentScrollY > 100) {
               setIsOpen(false);
             }

             setPrevScrollY(currentScrollY);
           };

           setPrevScrollY(window.scrollY);

           window.addEventListener("scroll", handleScroll);

           return () => {
             window.removeEventListener("scroll", handleScroll);
           };
         }, [prevScrollY]);


      return (
        <header className="w-full sticky top-0 z-50">
          <div
            className={`w-full transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <AnnouncementBar />
            <div className="w-full flex justify-between items-center py-3 sm:py-4 bg-white/80 shadow-sm border-b border-gray-100 backdrop-blur-sm">
            
            </div>
          </div>
        </header>
      );
}

export default Header;
