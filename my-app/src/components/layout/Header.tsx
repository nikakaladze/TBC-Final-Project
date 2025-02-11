import React from 'react'

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
  return (
    <header className="w-full sticky top-0 z-50">
      <div className='w-full transform transition-transform duration-300 ease-in-out'>
        <AnnouncementBar />
      </div>
    </header>
  );
}

export default Header;
