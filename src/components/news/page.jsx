import React from 'react'

const News = () => {

  const Articles =[
    {
      title: "How to Improve IT Infrastructure in the 21st Century",
      date: "August 10th 2024",
      content: "In today's fast-paced digital world, having a great IT infrastructure is crucial for any business. In our article, we shared major tips on how to improve IT setup, reduce downtime, and improve overall efficiency to propel your organisation towards growth.",
    },
    {
      title: "TechSolutions Launches new Cybersecurity Service",
      date: "August 1st 2024",
      content: "We are super excited to announce to the public the launch of our new service 'Cybersecurity' which aims at protecting small scale businesses from cyber bullies and threats. Our teams have worked tiredlessly to develop a comprehensive solution that covers everything from detecting threat to response to incidence.",
    },
    {
      title: "Our Teams behind the Scenes",
      date: "November 30th 2023",
      content: "We are thrilled to showcase our amazing teams behind the scenes of TechSolutions. They are a group of high intellectual and skilled professionals with a knack for creating solutions. You can learn more about them and how they can help boost your business.",
    },
  ]
  return (
    <article className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl text-center font-bold mb-6 text-teal-700">TechSolution News</h2>
      <section className="space-y-8">
      {Articles.map((news, index)=>(
        <div key={index} className="bg-slate-50 shadow-lg rounded-lg p-6">
          <h3 className="text-xl text-center font-semibold mb-6">{news.title}</h3>
          <p className="text-sm text-teal-500 mb-4">{news.date}</p>
          <span className="text-gray-600">{news.content}</span>
        </div>
      ))}
      </section>
    </article>
  )
}

export default News
