import React from 'react'

const Heroes = () => {
  return (
    <div className="h-screen w-screen bg-[url('/bg2.avif')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <section className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/4 h-auto sm:h-2/3 bg-red-400 p-4 sm:p-6 md:p-8 flex flex-col justify-evenly items-center text-center rounded-md shadow-lg">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
          TECH SOLUTIONS
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi similique error asperiores porro modi recusandae laborum deserunt tenetur architecto sed. Aut harum error vero beatae veniam. Tenetur, deserunt! Aut, modi.
        </p>
        <div className="w-full sm:w-3/4 md:w-2/3 h-16 flex justify-around items-center">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
            Learn More
          </button>
          <button className="bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}

export default Heroes
