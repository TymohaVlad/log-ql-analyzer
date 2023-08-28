import React, { ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setQuery } from '../../../store/redusers/QuerySlice';
import { setResultQuery } from '../../../store/redusers/ResultQuerySlise';
import { ResultQueryState } from '../../../store/redusers/ResultQuerySlise';

import ApiClient from '../../../utils/ApiClient';



export default function AnalyzerQuery() {
  const queryState = useSelector((state: RootState) => state.query.query);
  const logsState = useSelector((state: RootState) => state.logsFormat.logs);
  const dispatch = useDispatch();

  const prefix = '{job="analyze"}';
  let query = `${prefix}${queryState}`;

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    dispatch(setQuery(newQuery));
  };
  
const apiClient = new ApiClient()
const handleQuerySubmit = async () => {
  try {
    const response: ResultQueryState['response'] = await apiClient.executeQuery(logsState, query);
    dispatch(setResultQuery(response)); 
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
  

  return (
    <section className="query panel-container">
      <span className="panel__header">
        <b>Query</b>
      </span>
      <div className="query__box">
        <div className="input__box">
          <span className="prefix">{`{job="analyze"}`}</span>
          <input
            className="query__input"
            type="text"
            id="query__input"
            value={queryState}
            onChange={handleQueryChange}
          />
        </div>
        <button
          className="query__submit primary__button"
          onClick={handleQuerySubmit}
        >
          Run query
        </button>
      </div>
    </section>
  );
}
