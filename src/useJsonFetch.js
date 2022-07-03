import { useState, useEffect, useRef } from 'react';

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  let timestampRef = useRef();

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [url]);
  return [data, isLoading, hasError];
}
