/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { useCallback, useState, RefObject } from 'react';
import { Document, Page } from 'react-pdf';
import { useResizeObserver } from '@wojtekmaj/react-hooks';

type PDFFile = string | File | null;

type PDFViewerHookReturnType = {
  file: PDFFile;
  numPages: number | undefined;
  containerRef: RefObject<HTMLElement | null>;
  containerWidth: number | undefined;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDocumentLoadSuccess: (documentProxy: any) => void;
};

export function usePDFViewer(): PDFViewerHookReturnType {
  const [file, setFile] = useState<PDFFile>('./sample.pdf');
  const [numPages, setNumPages] = useState<number>();
  // @ts-ignore
  const [containerRef, setContainerRef] = useState<RefObject<HTMLElement | null>>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef.current, undefined, onResize);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  };

  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: any): void => {
    setNumPages(nextNumPages);
  };

  return {
    file,
    numPages,
    containerRef,
    containerWidth,
    onFileChange,
    onDocumentLoadSuccess,
  };
}
