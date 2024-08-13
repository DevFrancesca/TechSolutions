const Services = () => {
  const newsArticles = [
    {
      title: 'Tech Solutions Launches New Cybersecurity Service',
      date: 'August 5, 2024',
      content: 'We are excited to announce the launch of our new cybersecurity service aimed at protecting small businesses from cyber threats. Our team of experts has developed a comprehensive solution that covers everything from threat detection to incident response.'
    },
    {
      title: 'How to Improve Your IT Infrastructure in 2024',
      date: 'July 28, 2024',
      content: 'In today’s fast-paced digital world, having a robust IT infrastructure is essential for any business. In this article, we share some tips on how to enhance your IT setup, reduce downtime, and improve overall efficiency.'
    },
    {
      title: 'Meet Our New Software Development Team',
      date: 'July 15, 2024',
      content: 'We are proud to introduce our new software development team, a group of highly skilled professionals with a passion for creating innovative solutions. Learn more about their expertise and how they can help your business succeed.'
    }
  ];

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest News</h2>
      <div className="space-y-8">
        {newsArticles.map((article, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{article.date}</p>
            <p className="text-gray-700">{article.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

