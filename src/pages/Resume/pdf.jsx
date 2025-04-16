/** @format */

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

// 配置 worker 路径
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function MyPDFViewer() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className='flex flex-col items-center'>
      <Document
        file='/https://drive.google.com/file/d/147fyjPzWJhCEhvtKsoi_GRLbWdvJCPVd' // 你的 PDF 路径
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
}
