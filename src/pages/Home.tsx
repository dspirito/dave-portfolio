import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <section className="bg-gray-50 dark:bg-gray-900 py-24">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
        I am a full-stack developer with 15+ years experience. 
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        I am primarily focused on enterprise, eCommerce development using platforms like Magento, Adobe Commerce & WooCommerce.<br />
        I also build modern, performant web experiences with React, Vue, TypeScript, and Tailwind CSS.<br />
        More recently, I have been diving head-first into AI augmented development.<br />
        Welcome to my portfolio, take a look around!
      </p>
      <Link
        to="/projects"
        className="inline-block rounded-md bg-indigo-custom px-8 py-3 text-white font-semibold shadow hover:bg-indigo-custom transition"
      >
        View My Projects
      </Link>
    </div>
  </section>
);

export default Home;