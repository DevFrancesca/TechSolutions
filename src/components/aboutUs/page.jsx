import React from 'react'

const AboutUs = () => {
  return (
    <div className="h-[100vh] sm:h-[30vh] md:h-[40vh] lg:h-[100vh] w-screen bg-slate-500 flex justify-center items-center flex-col">
        <article className="h-[50vh] w-full flex justify-between items-center">
            <section className="w-[45vw] sm:w-4/5 md:w-3/4 lg:w-2/4 h-auto sm:h-full p-4 sm:p-6 md:p-8 flex items-center justify-evenly flex-col px-4 bg-white/30 rounded-lg shadow-md">
                <h2  class="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-teal-600">
                We at Tech Solutions <br/> make impact matter a lot
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black text-center">Over the past 10 years we have continued to work with private businesses across
                    the globe- to help them build online presence and grow their client base. <br /> Our 
                    workforce is made up of the industry's finest minds and as such we continue to deliver results that are real and measurable.
                </p>
            </section>
            <section className="h-full w-[45vw] flex justify-center items-center">
                <img src="/img.jpeg" alt="" className="w-11/12 h-full object-contain rounded-md shadow-md"/>
            </section>
        </article>
        <article className="h-[50vh] w-full flex justify-between items-center bg-green-500"></article>
      
    </div>
  )
}

export default AboutUs
