import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, opts)
      .then(async (response) => {
        const isJson = response.headers
          .get('content-type')
          ?.includes('application/json');
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setData(data);
      })
      .catch((error) => {
        setError(error.toString());
        console.error('There was an error!', error);
      });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    setLoading(false);
  }, [url]);
  return [data, isLoading, hasError];
}
