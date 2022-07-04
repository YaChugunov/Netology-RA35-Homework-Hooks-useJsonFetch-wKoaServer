import { useState, useEffect } from 'react';

export const useJsonFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  useEffect(() => {
    console.log(`useEffect url ${url}`);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setData(data);
        setError(null);
      } catch (e) {
        console.error(e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return [data, isLoading, hasError];
};
