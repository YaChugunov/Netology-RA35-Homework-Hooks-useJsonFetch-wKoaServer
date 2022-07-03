import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    console.error('url', url);
    const headers = { 'Content-Type': 'application/json' };
    // GET request using fetch with error handling
    fetch(url, { headers })
      .then(async (response) => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = data || response.statusText;
          return Promise.reject(error);
        }
        console.log('data', data);
        setData({ data });
      })
      .catch((error) => {
        setError({ error });
        console.error('There was an error!', error);
      });
    setLoading(false);
    return [data, isLoading, hasError];
  }, [url]);
}
