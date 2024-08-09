import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-gray-400 h-20 w-full shadow-md">
      <article className="w-1/6 h-full flex items-center justify-center">
        <img src="/averLogoR.png" alt="" className="w-11/12 h-3/4 object-cover"/>
      </article>
      <nav className="h-full w-3/6 flex items-center justify-center"> 
            <ul className="list-none flex items-center justify-around w-full cursor-pointer">
              <li className="hover:text-teal-400 hover:scale-110 transform transition duration-300">Homepage</li>
              <li className="hover:text-white    hover:scale-110 transform transition duration-300">About Us</li>
              <li className="hover:text-teal-400 hover:scale-110 transform transition duration-300">News</li>
              <li className="hover:text-teal-400 hover:scale-110 transform transition duration-300">Services</li>
              <li className="hover:text-teal-400 hover:scale-110 transform transition duration-300">Contact Us</li>
            </ul>
       </nav>

      <article className="w-1/5 h-full bg-red-500 flex items-center justify-center">

      </article>
    </div>
  )
}

export default Header
