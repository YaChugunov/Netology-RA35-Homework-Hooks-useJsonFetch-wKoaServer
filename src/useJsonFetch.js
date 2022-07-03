import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  let timestampRef = useRef();

  useEffect(() => {
    const fetchProcess = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        console.log('response', data);
        setData(data);
        setError(null);
      } catch (e) {
        console.log(url, e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchProcess();
    console.log();
  }, [url]);
  return [data, isLoading, hasError];
}
