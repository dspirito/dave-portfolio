import React from 'react';
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import pdfResume from '../assets/jul17-2025-david-spirito-dev-resume.pdf'; // Adjust path as needed

import Modal from '../components/Modal';
import PdfFullView from '../components/PdfFullView';

function PdfEmbed() {
  const [showModal, setShowModal] = useState(false);

  // Correctly place the hook inside the function component
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }, []);

  return (
    <div className="App" style={{ padding: '20px' }}>
      {/* Clickable Thumbnail to open the modal */}
      <div
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer', maxWidth: '600px', border: '1px solid #ccc', padding: '10px' }}
      >
        <Document file={pdfResume}>
          <Page pageNumber={1} width={560} />
        </Document>
        <p style={{ textAlign: 'center', marginTop: '10px' }}>Click to view all pages</p>
      </div>

      {/* The Modal for the full PDF viewer */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <PdfFullView file={pdfResume} />
      </Modal>
    </div>
  );
}

export default PdfEmbed;