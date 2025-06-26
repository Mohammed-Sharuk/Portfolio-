import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EcommerceDetails = () => {
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
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">E-Commerce Analytics</h1>

      <p className="mb-4 text-xl font-semibold text-gray-100">
        Unlock the Power of Your E-Commerce Data!{" "}
        <span className="italic text-sm text-gray-400">|| Excel</span>
      </p>

      <p className="mb-4 text-gray-300">
        Imagine running an e-commerce business. You need to track sales, identify trends, and optimize your operations. This is where data analytics steps in — helping you make data-driven decisions and supercharge your business performance.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Objective</h2>
      <p className="mb-4 text-gray-300">
        This Excel project dives into e-commerce data, revealing critical insights that can help you optimize sales performance, customer behavior, and overall business strategy.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Chapters</h2>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li><strong>Sales Performance:</strong> Analyzing product sales and identifying top-performing products and sales trends.</li>
        <li><strong>Customer Insights:</strong> Investigating customer demographics and behavior to understand purchasing patterns.</li>
        <li><strong>Market Analysis:</strong> Looking at geographic performance and regional preferences.</li>
        <li><strong>Product Trends:</strong> Understanding which products are trending and their impact on sales.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Key Insights</h2>
      <ul className="list-disc list-inside mb-4 text-gray-300">
        <li><strong>Top Products:</strong>
          <ul className="list-disc list-inside ml-5 mb-2">
            <li><strong>Product A:</strong> 25% of total sales, growing 10% each quarter.</li>
            <li><strong>Product B:</strong> A recent surge in popularity in Q3, driving 15% increase in sales.</li>
          </ul>
        </li>
        <li><strong>Customer Behavior:</strong>
          <ul className="list-disc list-inside ml-5 mb-2">
            <li><strong>Repeat Purchases:</strong> 60% of total sales come from returning customers.</li>
            <li><strong>Demographics:</strong> 80% of purchases are from customers aged 25-35.</li>
          </ul>
        </li>
        <li><strong>Regional Insights:</strong>
          <ul className="list-disc list-inside ml-5">
            <li><strong>North America:</strong> Leading the charge with 40% of total sales.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-2 text-yellow-300">Conclusion</h2>
      <p className="mb-6 text-gray-300">
        This analytics dashboard enables you to track the performance of your e-commerce business, identify key trends, and make informed decisions to grow your brand and increase sales. It's your go-to resource for making smarter business decisions and staying ahead of the competition.
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
          <a href="/E-commerce_analysis_BI.png" target="_blank" rel="noopener noreferrer">
            <img
              src="/E-commerce_analysis_BI.png"
              alt="E-Commerce Power BI Dashboard"
              className="w-full max-w-5xl rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="https://github.com/Mohammed-Sharuk/ecommerce-data-analytics"
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

export default EcommerceDetails;
