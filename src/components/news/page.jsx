import React from 'react'

const News = () => {
  return (
    <article className="py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl text-center font-bold mb-6">TechSolution News</h2>
      <section className="space-y-8">
        <div className="bg-slate-50 shadow-md rounded-lg p-6">
          <h3 className="text-xl text-center font-semibold mb-6">Headline</h3>
          <p className="text-sm text-gray-500 mb-4">Content</p>
          <span className="text-gray-600">Paragraph</span>
        </div>
      </section>
    </article>
  )
}

export default News
