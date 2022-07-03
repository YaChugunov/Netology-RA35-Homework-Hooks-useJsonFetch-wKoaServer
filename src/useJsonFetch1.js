import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  let timestampRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        // if (timestampRef.current === timestamp) {
        const res = await response.json();
        console.log(res);
        let res1 = JSON.parse(res);
        //setData(JSON.parse(res));
        setData(res1);
        // }
        setError(null);
      } catch (e) {
        console.log(url, e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [data, isLoading, hasError];
}
