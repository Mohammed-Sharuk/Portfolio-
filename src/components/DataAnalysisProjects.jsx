import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DataAnalysisProjects = () => {
  return (
    <section id="data-analysis-projects" className="p-10 text-white bg-[#1b1f2a]">
      <h2 className="text-4xl font-bold text-center mb-4">Data Analysis Projects</h2>
      <p className="text-center text-gray-400 mb-10">
        Every dataset tells a story. Let’s dive into mine and discover how I bring data to life!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Project 1 */}
        <Link
          to="/project-customer-service"
          className="bg-[#2a2f45] rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
        >
          <motion.img
            src="/CustomerService_DP.png"
            alt="Customer Service Project"
            className="w-full h-56 object-cover"
            whileHover={{ rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 0.6 } }}
            whileTap={{ scale: 0.95, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
          />
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h3 className="text-xl font-bold mb-2">Customer Service Analysis</h3>
            <p className="text-sm text-gray-300 mb-4">
              Turn customer feedback into actionable business insights using Excel dashboards.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">Excel</span>
              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">Power Query</span>
              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">Data Visualization</span>
            </div>
            <div className="inline-block text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded w-32 text-center mt-auto">
              Let’s Go!!
            </div>
          </div>
        </Link>

        {/* Project 2 */}
        <Link
          to="/project-ecommerce-analysis"
          className="bg-[#2a2f45] rounded-lg overflow-hidden shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
        >
          <motion.img
            src="/E-commerce_anaylsis-DP.jpg"
            alt="E-Commerce Project"
            className="w-full h-56 object-cover"
            whileHover={{ rotate: [0, -5, 5, -5, 5, 0], transition: { duration: 0.6 } }}
            whileTap={{ scale: 0.95, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
          />
          <div className="p-6 flex flex-col justify-between flex-grow">
            <h3 className="text-xl font-bold mb-2">E-Commerce Data Analytics</h3>
            <p className="text-sm text-gray-300 mb-4">
              Analyze sales trends and profits using Power BI and SQL-driven data exploration.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">SQL</span>
              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">Excel</span>
              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded">Power BI</span>
            </div>
            <div className="inline-block text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded w-32 text-center mt-auto">
              Let’s Go!!
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default DataAnalysisProjects;
