import React from 'react'

const AboutUs = () => {
    const Articles =[
        {
          title: "IT and Infrastructure",
          img: "/tech.jpeg",
          content: "TechSolution builds and operate most infrastructure. We provide market and industry insights along with expertise that leads to organisational success.",
        },
        {
          title: "Cybersecurity",
          img: "/cyber.jpeg",
          content: "TechSolution Cybersecurity service helps you operate securely, grow successfully and secure success for your organisation.",
        },
        {
          title: "Financial Advisory",
          img: "/finance.jpeg",
          content: "TechSolution helps organisation with their digital transformation which is an essential strategy for growth in our fast paced world today.",
        },
      ]
  return (
    <div className="h-[120vh] sm:h-[30vh] md:h-[40vh] lg:h-[120vh] w-screen bg-slate-200 flex justify-evenly items-center flex-col">
        <article className="h-[50vh] w-full flex justify-evenly items-center">
            <section className="w-[45vw] sm:w-4/5 md:w-3/4 lg:w-2/4 h-auto sm:h-full p-4 sm:p-6 md:p-8 flex items-center justify-between flex-col bg-white/30 rounded-lg shadow-lg">
                <h2  class="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-bold text-teal-600">
                We at Tech Solutions <br/> make impact matter a lot
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black text-center">Over the past 10 years we have continued to work with private businesses across
                    the globe- to help them build online presence and grow their client base. <br /> Our 
                    workforce is made up of the industry finest minds and as such we continue to deliver results that are real and measurable.
                </p>
            </section>
            <section className="bg-cover bg-center bg-no-repeat h-full w-[45vw] rounded-md shadow-lg" style={{backgroundImage: "url('/img.jpeg')"}}>
            </section>
        </article>
        <section className="w-full flex flex-col sm:flex-row justify-evenly items-center">
            {Articles.map((about, index)=>(
            <div key={index} className="bg-slate-50 shadow-lg rounded-md w-full sm:w-[30%] p-4 flex flex-col items-center hover:scale-90 transform transition duration-200">
            <h3 className="text-xl text-center font-semibold mb-4">{about.title}</h3>
            <img src={about.img} alt="image here" className="object-cover w-[90%] sm:w-[80%] h-48 mb-4 rounded-md"/>
            <span className="text-gray-600">{about.content}</span>
            </div>
            ))}
      </section>
      
    </div>
  )
}

export default AboutUs
