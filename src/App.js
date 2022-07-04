import React from 'react';
import './App.css';

import { useJsonFetch } from './useJsonFetch';

function FetchData({ url }) {
  const [data, isLoading, hasError] = useJsonFetch(url);
  return (
    <div className="App">
      <h2>Use hook to fetch data url</h2>
      <h3>{url}</h3>
      <h3>{data && data.message}</h3>
      <h3 className="isLoading">{isLoading && 'Is Loading'}</h3>
      <h3 className="hasError">{hasError && 'Has Error'}</h3>
    </div>
  );
}
function FetchError({ url }) {
  const [data, isLoading, hasError] = useJsonFetch(url);
  return (
    <div className="App">
      <h2>Use hook to fetch error url</h2>
      <h3>{url}</h3>
      <h3>{data && data.message}</h3>
      <h3 className="isLoading">{isLoading && 'Is Loading'}</h3>
      <h3 className="hasError">{hasError && 'Has Error'}</h3>
    </div>
  );
}
function FetchLoading({ url }) {
  const [data, isLoading, hasError] = useJsonFetch(url);
  return (
    <div className="App">
      <h2>Use hook to fetch loading url</h2>
      <h3>{url}</h3>
      <h3>{data && data.message}</h3>
      <h3 className="isLoading">{isLoading && 'Is Loading'}</h3>
      <h3 className="hasError">{hasError && 'Has Error'}</h3>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <FetchData url={process.env.REACT_APP_DATA_URL} />
      <hr />
      <FetchError url={process.env.REACT_APP_ERROR_URL} />
      <hr />
      <FetchLoading url={process.env.REACT_APP_LOADING_URL} />
    </div>
  );
}
