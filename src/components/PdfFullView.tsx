import React from 'react';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const PdfFullView = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const pages = numPages ? Array.from({ length: numPages }, (_, index) => index + 1) : [];

  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {pages.map(pageNumber => (
          <div key={pageNumber} style={{ marginBottom: '10px' }}>
            <Page pageNumber={pageNumber} width={window.innerWidth * 0.75} />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default PdfFullView;