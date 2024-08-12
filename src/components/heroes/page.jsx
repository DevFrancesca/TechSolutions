import React from 'react'

const Heroes = () => {
  return (
    <div className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center relative"
         style={{ backgroundImage: "url('/bg2.avif'), linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))" }}>
      <section className="w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/4 h-auto sm:h-2/3 p-4 sm:p-6 md:p-8 text-center flex flex-col justify-evenly items-center  bg-white/30 rounded-lg shadow-md"
      >
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-600">
          TECH SOLUTIONS
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi similique error asperiores porro modi recusandae laborum deserunt tenetur architecto sed. Aut harum error vero beatae veniam. Tenetur, deserunt! Aut, modi.
          </p>
        <div className="w-full sm:w-1/2 md:w-2/3 h-16 flex justify-evenly items-center"
        >
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-300">
            Contact Us
          </button >

          <button className="bg-white text-teal-500 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}

export default Heroes
