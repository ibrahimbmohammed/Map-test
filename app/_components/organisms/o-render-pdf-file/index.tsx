/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import useWindowSize, { Size } from '@lib/hooks/useWindowSize';

interface PDFViewerProps {
  pdfURL: String;
}

function PDFViewer({ pdfURL }: PDFViewerProps) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); // setting 1 to show first page
  const { width }: Size = useWindowSize();

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: any) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        onLoadError={console.error}
        file={`${pdfURL}`}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {width ? (
          <Page
            pageNumber={pageNumber}
            width={width > 480 ? 500 : width <= 280 ? width - 80 : 300}
          />
        ) : null}
      </Document>
      <div className="text-center">
        <p className="ml-5">
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          className="rounded-md border bg-primaryColor text-white md:ml-5 md:p-[10px] "
        >
          Previous
        </button>
        <button
          className="rounded-md border bg-primaryColor text-white md:ml-5 md:p-[10px] "
          type="button"
          // @ts-ignore
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
        <a
          className="ml-1  border bg-primaryColor  text-white sm:p-3 md:ml-5 md:rounded-md md:p-3  "
          href={`${pdfURL}`}
          rel="noreferrer"
          target="_blank"
          download
        >
          Download
        </a>
      </div>
    </>
  );
}

export default PDFViewer;
