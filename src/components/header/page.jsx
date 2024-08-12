import React from 'react'

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-zinc-200 h-20 w-full shadow-md z-50">
      <article className="w-1/6 h-full flex items-center justify-center">
        {/* <img src="/averLogoR.png" alt="" className="w-11/12 h-3/4 object-cover"/> */}
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-teal-600">TechSolutions</h1>
      </article>
      <nav className="h-full">
        <div className="flex justify-between items-center sm:hidden">
          <button className="text-teal-600 focus:outline-none">
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
                d=''
              />
            </svg>
          </button>
        </div> 

        <ul
         className="list-none flex sm:flex items-center justify-around w-full cursor-pointer flex-col absolute sm:relative top-full left-0 bg-zinc-200 sm:bg-transparent z-50 sm:flex-row sm:items-center"
         >
              <li>
                <a href="#home" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">Homepage</a>
              </li>
              <li>
                <a href="#about" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">News</a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">Services</a>
              </li>
              <li className="hover:text-teal-400 hover:scale-110 transform transition duration-300">Contact Us</li>
        </ul>
       </nav>

      <article className="w-1/5 h-full flex items-center justify-center">

      </article>
    </div>
  )
}

export default Header
