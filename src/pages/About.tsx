import React from 'react';
import DaveImg from '/dave.jpeg'; // Adjust path if needed
import BrandsCarousel from '../components/BrandsCarousel';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import pdfResume from '../assets/jul17-2025-david-spirito-dev-resume.pdf'; // Adjust path as needed
import PdfEmbed from '../components/PdfEmbed';

import Modal from '../components/Modal';
import PdfFullView from '../components/PdfFullView';


const About: React.FC = () => (
  <section className="flex flex-wrap justify-center py-16">
    <img
      src={DaveImg}
      alt="David Spirito"
      className="rounded-full object-cover border-2 border-indigo-custom mb-8 mr-8"
      style={{ width: '400px', height: '400px' }}
    />
    <div className="max-w-2xl">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-700">About David</h2>
      <p className="text-lg text-gray-700 dark:text-gray-700">
        Hi, I'm David Spirito. I build modern, performant web experiences with React, TypeScript, and Tailwind CSS.
      </p>
      <div className="flex items-center mt-6">
        <a
          href="/contact" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-indigo-custom text-white rounded hover:bg-indigo-700 transition"
        >
          Get in touch!
        </a>
      </div>
      <div className="mt-8  border p-4 rounded shadow">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-700">My Resume</h3>
        <PdfEmbed />
        <a
          href={pdfResume} 
          target="_blank" 
          rel="noopener noreferrer"
          download="David_Spirito_Resume.pdf"
          className="mt-4 inline-block px-6 py-2 bg-indigo-custom text-white rounded hover:bg-gray-300 transition"
        >
          Download Resume
        </a>
      </div>
      </div>
      <div><BrandsCarousel /></div>
        
  </section>

);

export default About;