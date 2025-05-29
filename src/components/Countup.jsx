import React from 'react';
import CountUp from 'react-countup';

const statsData = [
  {
    value: 25000,
    suffix: '+',
    title: 'Completed Cases',
    description: 'We always provide people a complete solution upon focus of any business.',
  },
  {
    value: 17,
    suffix: '+',
    title: 'Our Offices',
    description: 'We always provide people a complete solution upon focus of any business.',
  },
  {
    value: 86,
    suffix: '+',
    title: 'Skilled People',
    description: 'We always provide people a complete solution upon focus of any business.',
  },
  {
    value: 28,
    suffix: '+',
    title: 'Happy Clients',
    description: 'We always provide people a complete solution upon focus of any business.',
  },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
                <CountUp end={stat.value} duration={2} separator="," suffix={stat.suffix} />
              </h2>
              <h3 className="mt-2 text-lg font-semibold text-gray-800">{stat.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
