'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleBurger = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center bg-zinc-200 h-20 w-full shadow-md z-50 px-4 sm:px-10">
      <article className="flex-1 h-full flex items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-600">TechSolutions</h1>
      </article>
      <nav className="flex-1 h-full flex justify-end md:justify-center">
        <div className="flex items-center md:hidden">
          <button className="text-teal-600 focus:outline-none" onClick={toggleBurger}>
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
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <ul
          className={`${open ? 'flex' : 'hidden'} flex-col md:flex list-none items-center justify-around w-full cursor-pointer bg-zinc-200 md:bg-transparent md:flex-row md:items-center`}
        >
          <li>
            <Link href="/" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">
              Homepage
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">About Us</a>
          </li>
          <li>
            <a href="#news" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">News</a>
          </li>
          <li>
            <a href="#services" className="hover:text-teal-400 hover:scale-110 transform transition duration-300">Services</a>
          </li>
          <li className="hover:text-teal-400 hover:scale-110 transform transition duration-300">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <article className="w-1/5 h-full flex items-center justify-center md:hidden"></article>
    </div>
  );
};

export default Header;
