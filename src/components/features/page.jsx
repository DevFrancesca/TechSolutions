import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-zinc-200 h-20 w-full shadow-md z-50">
      <article className="w-1/6 h-full flex items-center justify-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-teal-600">
          TechSolutions
        </h1>
      </article>
      
      <nav className="h-full">
        <div className="flex items-center justify-between sm:hidden">
          <button 
            className="text-teal-600 focus:outline-none" 
            onClick={toggleMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
        
        <ul 
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col sm:flex list-none items-center justify-around w-full cursor-pointer absolute sm:relative top-full left-0 bg-zinc-200 sm:bg-transparent z-50 sm:flex-row sm:items-center`}
        >
          <li>
            <a href="#home" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">
              Homepage
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">
              News
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">
              Services
            </a>
          </li>
          <li className="hover:text-teal-400 hover:scale-110 transform transition duration-300">
            Contact Us
          </li>
        </ul>
      </nav>

      <article className="w-1/5 h-full flex items-center justify-center">
        {/* Additional content if needed */}
      </article>
    </div>
  )
}

export default Header
