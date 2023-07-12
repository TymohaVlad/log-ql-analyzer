import React from 'react';
import {  useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

export default function AnalyzerQuery() {
  const query = useSelector((state: RootState) => state.query.query);


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
            value={query}
          />
        </div>
        <button className="query__submit primary__button">Run query</button>
      </div>
    </section>
  );
}
