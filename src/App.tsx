import React, { useEffect } from 'react';
import AnalyzerPage from './components/AnalyzerPage/AnalyzerPage';
import './App.css';
import { useDispatch } from 'react-redux';
import { setLogs } from './store/redusers/logsFotmatSlise';
import { setQuery } from './store/redusers/QuerySlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const logs = urlParams.get('logs');
    const query = urlParams.get('query');

    if (logs) {
      dispatch(setLogs(logs));
    }
    if (query) {
      dispatch(setQuery(query));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <AnalyzerPage />
    </div>
  );
}

export default App;
