import React from 'react';

const reasons = [
  {
    title: 'Easy Visitor Registration',
    description: 'Register visitors quickly and efficiently, reducing wait times and maintaining accurate records.',
    image: 'https://cdn-icons-png.flaticon.com/512/4140/4140091.png',
  },
  {
    title: 'Secure Access Control',
    description: 'Track visitor entries and exits to enhance security and ensure only authorized access to premises.',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
  },
  {
    title: 'Real-Time Reports',
    description: 'Get instant reports of all visitor activities, helping management make informed decisions quickly.',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135719.png',
  },
  {
    title: 'Custom Notifications',
    description: 'Notify staff and security about visitor arrivals automatically, streamlining communication.',
    image: 'https://cdn-icons-png.flaticon.com/512/3523/3523063.png',
  },
];

function WhyChooseUs() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-[#237227]">Why Choose OTMS</h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Optimize your visitor management process with our secure, efficient, and smart system.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={reason.image}
              alt={reason.title}
              className="w-20 h-20 mb-4 object-contain rounded-md shadow-md"
            />
            <h3 className="text-xl font-semibold text-[#237227] mb-2">{reason.title}</h3>
            <p className="text-gray-700 text-sm">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;