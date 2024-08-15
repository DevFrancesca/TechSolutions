import React from 'react'

const Services = () => {

  const Articles =[
    {
      title: "IT and Infrastructure",
      img: "/IT.jpeg",
      content: "TechSolution builds and operate most infrastructure. We provide market and industry insights along with expertise that leads to organisational success.",
    },
    {
      title: "Cybersecurity",
      img: "/cyber.jpeg",
      content: "TechSolution Cybersecurity service helps you operate securely, grow successfully and secure success for your organisation.",
    },
    {
      title: "Tech Insights",
      img: "/tech2.jpeg",
      content: "TechSolution helps organisation with their digital transformation which is an essential strategy for growth in our fast paced world today.",
    },
  ]
  return (
    <article className="w-screen h-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-evenly bg-slate-200">
      <h2 className="text-2xl text-center font-bold mb-6 text-teal-700">Our Services</h2>
      <section className="w-full flex flex-col sm:flex-row justify-evenly items-center gap-6">
      {Articles.map((services, index)=>(
        <div key={index} className="bg-slate-50 shadow-lg rounded-md w-full sm:w-[30%] p-4 flex flex-col items-center hover:scale-90 transform transition duration-300">
          <h3 className="text-xl text-center font-semibold mb-4">{services.title}</h3>
          <img src={services.img} alt="image here" className="object-cover w-[90%] sm:w-[80%] h-48 mb-4 rounded-md"/>
          <span className="text-gray-600">{services.content}</span>
        </div>
      ))}
      </section>
    </article>
  )
}

export default Services
