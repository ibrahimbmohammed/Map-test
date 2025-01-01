/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const useFetchQuery = <T>(
  _url: string,
): {
  data: T | undefined;
  error: unknown | null;
  isLoading: boolean;
  fetchData: (url?: string) => Promise<T | undefined> | undefined;
} => {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);

  async function fetchData(url: string) {
    const arrayElement = url?.split('/');
    const lastElement = arrayElement.slice(-1);

    if (lastElement[0] === 'undefined' || lastElement[0] === '' || lastElement[0] === 'null')
      return;
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const responseData: T = await response.json();
      setData({ ...responseData });
      setIsLoading(false);
      return responseData;
    } catch (error) {
      setError(error);
      setIsLoading(false);
      // Usually toast the error as a message
      console.error(error as unknown as string, { type: 'error' });
    }
  }

  useEffect(() => {
    if (_url === '' || typeof _url === 'undefined') return;
    fetchData(_url);
  }, [_url]);

  return {
    data,
    error,
    isLoading,
    fetchData: (url?: string) => {
      if (url) {
        return fetchData(url);
      }
      return fetchData(_url);
    },
  };
};

export default useFetchQuery;
