import React from 'react';
import DaveImg from '/dave.jpeg'; // Adjust path if needed

const About: React.FC = () => (
  <section className="flex flex-wrap items-center justify-center py-16">
    <img
      src={DaveImg}
      alt="David Spirito"
      className="rounded-full object-cover border-2 border-indigo-custom mb-8 mr-8"
      style={{ width: '400px', height: '400px' }}
    />
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Hi, I'm David Spirito. I build modern, performant web experiences with React, TypeScript, and Tailwind CSS.
      </p>
    </div>
  </section>
);

export default About;