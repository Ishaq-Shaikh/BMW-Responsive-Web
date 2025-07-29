import bmwLogo from '../../assets/bmw-logo.png';
import React, { useState } from 'react';
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={` flex items-center justify-between overflow-x-hidden text-white bg-[#ffffff21] mt-4 w-[85vw] ml-7 rounded-2xl md:ml-15 z-50 shadow-md lg:mt-5 lg:ml-7 fixed lg:w-[95vw] lg:rounded-full overflow-y-hidden ${isOpen ? 'h-40' : 'h-[60px]'} lg:h-[60px]`}>
        <div className={`flex items-center justify-center ${isOpen ? 'mb-20' : ''} `} >
          <img className='h-[33px] mx-5 my-3' src={bmwLogo} alt="BMW Logo" />
          <h1 className='font-bold lg:hidden hover:cursor-pointer'>BMW</h1>
          <h1 className='hidden lg:block font-black text-[23px] hover:cursor-pointer'>Bavarian Motor Works</h1>
        </div>
        <div className={`mx-5 text-[18px] active:bg-[#0066b1] p-2 lg:hidden cursor-pointer ${isOpen ? 'mb-20' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
        </div>
        <div className='absolute lg:block lg:static lg:opacity-100'>
          <ul className={`lg:flex lg:items-center lg:justify-center mt-15 lg:mt-3 space-y-2 ml-60 ${isOpen ? 'block' : 'hidden'} `}>
            <li className='mx-8'>
              <a className='font-semibold text-[15px] hover:text-[#0066b1] hover:cursor-pointer duration-500' href="#Home">Home</a>
            </li>
            <li className='mx-8'>
              <a className='font-semibold text-[15px] hover:text-[#0066b1] hover:cursor-pointer duration-500' href="#About">About</a>
            </li>
            <li className='mx-8 lg:mb-1'>
              <a className='font-semibold text-[15px] hover:text-[#0066b1] hover:cursor-pointer duration-500' href="#Store">Store</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
