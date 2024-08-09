import React from 'react'

const Heroes = () => {
  return (
    <div className="h-screen w-screen bg-[url('/bg2.avif')] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center"
    >
      <section className="w-2/3 sm-w-4/5 md-w-3/4 lg-w-2/4 h-auto sm-h-2/3 p-4 sm-p-6 md-p-8 text-center bg-red-400 flex flex-col justify-evenly items-center"
      >
        <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-600">
          TECH SOLUTIONS
        </h1>
        <p class="text-xs sm:text-base md:text-md lg:text-lg xl:text-text-base 2xl:text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi similique error asperiores porro modi recusandae laborum deserunt tenetur architecto sed. Aut harum error vero beatae veniam. Tenetur, deserunt! Aut, modi.
          </p>
        <div className="w-2/3 h-1/4 bg-amber-300 flex justify-center items-center">
          <button></button>
          <button></button>
        </div>
      </section>
    </div>
  )
}

export default Heroes
