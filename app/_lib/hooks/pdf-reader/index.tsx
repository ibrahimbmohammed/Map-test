/* eslint-disable no-shadow */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

function usePdfViewer(pdfFile: any) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const PdfViewer = () => (
    <div>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );

  return { PdfViewer, pageNumber, setPageNumber };
}

export default usePdfViewer;

// import React from 'react';
// import usePdfViewer from './usePdfViewer'; // Import the custom hook

// function MyPdfViewerComponent() {
//   const { PdfViewer, pageNumber, setPageNumber } = usePdfViewer('somefile.pdf');

//   return (
//     <div>
//       <PdfViewer />
//       <button onClick={() => setPageNumber(pageNumber - 1)}>Previous Page</button>
//       <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page</button>
//     </div>
//   );
// }

// export default MyPdfViewerComponent;
