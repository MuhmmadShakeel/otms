import React, { useState } from "react";

const faqs = [
  {
    question: "How do I register a visitor in OTMS?",
    answer:
      "You can register a visitor by navigating to the 'Visitor Registration' page, filling in the visitor details, and submitting the form. The system will generate a unique visitor ID for tracking.",
  },
  {
    question: "Can I manage multiple entries at once?",
    answer:
      "Yes! OTMS allows bulk imports via CSV files for visitor data, making it easy to manage multiple entries efficiently.",
  },
  {
    question: "Is my visitor data secure?",
    answer:
      "Absolutely. All visitor data is encrypted and securely stored on our server, following best practices for data protection and privacy.",
  },
  {
    question: "How do I check visitor history?",
    answer:
      "Visit the 'Visitor History' section and search by visitor name, ID, or date range to view all past entries and visits.",
  },
  {
    question: "Can I customize OTMS for my organization?",
    answer:
      "Yes! OTMS is flexible and can be customized according to your organization's needs, including roles, permissions, and reports.",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* FAQ Content */}
        <div className="lg:w-1/2 w-full">
          <h2 className="text-4xl font-bold text-[#237227] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Everything you need to know about OTMS. Click on a question to view the answer.
          </p>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left"
                >
                  <span className="font-semibold text-gray-800 text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`text-2xl font-bold text-[#FFAA00] transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* Answer Section */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src="https://i.pinimg.com/736x/2c/3f/77/2c3f77b4b7f5de8f0b1db2e7395e7f3a.jpg"
            alt="OTMS FAQ"
            className="rounded-3xl shadow-2xl object-cover w-full max-w-md h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default Faq;