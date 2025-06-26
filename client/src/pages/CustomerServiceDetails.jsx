import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerServiceDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1b1f2a]">
        <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="px-4 md:px-10 pt-28 pb-10 text-white bg-[#1b1f2a] min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">Customer Service Analysis</h1>

      <p className="mb-4 text-xl font-semibold text-gray-100">
        Turn your Customer Insights into Business Gold!{" "}
        <span className="italic text-sm text-gray-400">|| Excel</span>
      </p>

      <p className="mb-4 text-gray-300">
        Imagine you're running a business. Customers are the lifeblood of your company, and keeping them happy is crucial.
        That's where customer service comes in. It's the magic touch that turns satisfied customers into loyal fans.
        But how do you know if your customer service is hitting the mark? That's where this project comes in.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Objective</h2>
      <p className="mb-4 text-gray-300">
        This Excel project is about creating a customer service dashboard that sheds light on what's really happening in the world of your customer support team.
        It's like having a superhero X-ray for your customer service, letting you see strengths, weaknesses, and opportunities to improve.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Chapters</h2>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li><strong>Customer Satisfaction:</strong> We peered into the minds of the customers, using star ratings and feedback to gauge their happiness.</li>
        <li><strong>Agent Performance:</strong> We tracked the customer service heroes, seeing who consistently delivered smiles and solved problems like a champ.</li>
        <li><strong>Interaction Channels:</strong> We examined how customers reach out, whether it's by phone, email, or live chat, to see which methods make them happiest.</li>
        <li><strong>Top Trends:</strong> We identified patterns and insights hidden within the data, like which days see the most interactions or which issues cause the most frowns.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Key Insights</h2>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li><strong>Customer Champions:</strong>
          <ul className="list-disc list-inside ml-5 mb-2">
            <li><strong>Requests shine:</strong> 7.2 out of 10 satisfaction, chosen by 53% of customers.</li>
            <li><strong>Adrien aces it:</strong> Monthly average satisfaction of 7.3 out of 10.</li>
          </ul>
        </li>
        <li><strong>Interaction All-Stars:</strong>
          <ul className="list-disc list-inside ml-5 mb-2">
            <li><strong>Summer surge:</strong> June had the highest interactions.</li>
            <li><strong>Seasonal shifts:</strong> Roach Cousineau ruled summer, Adrien led September.</li>
          </ul>
        </li>
        <li><strong>Deeper Dives:</strong>
          <ul className="list-disc list-inside ml-5">
            <li><strong>August blues:</strong> Daily satisfaction dropped — worth a closer look.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Conclusion</h2>
      <p className="mb-6 text-gray-300">
        This customer service dashboard is your secret weapon for understanding your customers and delivering the kind of service that makes them sing your praises.
        Use it to identify areas for improvement, celebrate your star agents, and keep your customers coming back for more.
        Remember, happy customers are loyal customers, and loyal customers are the key to business success!
      </p>

      {/* ✅ Power BI Image with Scroll Animation */}
      <div
        className="my-8 p-4 border border-gray-700 rounded bg-[#2a2e3d]"
        data-aos="fade-up"
      >
        <h3 className="text-xl font-semibold mb-4 text-center text-blue-300">
          Power BI Visualization
        </h3>
        <div className="flex justify-center">
          <a href="/Customer-Service-BI.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/Customer-Service-BI.png"
              alt="Customer Service Power BI Dashboard"
              className="w-full max-w-5xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="https://github.com/Mohammed-Sharuk/Customer-Service-Analysis"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          SEE CODE HERE!
        </a>
      </div>
    </section>
  );
};

export default CustomerServiceDetails;
