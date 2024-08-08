import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-400 h-20 w-full shadow-md">
      <article className="w-1/5 h-full bg-red-500 flex items-center justify-center object-contain">
        <img src="./netDev.png" alt=""/>
      </article>
      <nav className="h-full w-3/6 bg-amber-400 flex items-center justify-center"> 
            <ul className="list-none flex items-center justify-around w-full cursor-pointer">
                <li>Homepage</li>
                <li>About Us</li>
                <li>News</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
       </nav>

      <article className="w-1/5 h-full bg-red-500 flex items-center justify-center">

      </article>
    </div>
  )
}

export default Header
