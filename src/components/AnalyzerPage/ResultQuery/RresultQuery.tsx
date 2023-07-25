import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { ResultQueryState } from '../../../store/redusers/ResultQuerySlise';
import Dropdown from 'react-dropdown-select';
import './ResultQuery.css';

interface ResultQuery {
  results: ResultQueryState;
  origin_line: string;
}

const RresultQuery: React.FC = () => {
  const dispatch = useDispatch();
  const resultQuery = useSelector((state: RootState) => state.results.response);

 

  return (
    <section className="result__section">
      <div>
        {resultQuery.results.map((result, index) => {
          const lastStageRecord = result.stage_records[result.stage_records.length - 1];
  
          return (
            <div className="result__container" key={index}>
              <h3>Results</h3>
              <details className="result__details">
                <summary>
                  <span
                    className={`origin__line ${lastStageRecord?.filtered_out ? 'filtered' : ''}`}
                  >
                     Line {index + 1}  {result.origin_line}
                    </span>
                </summary>
                <div className="explain-section__header">
                  Original log line
                  <span className="stage-expression"> {`'{job="analyze"}'`}</span>
                  <p>{result.origin_line}</p>
                </div>
                <div className='explain-section__header'>
                  {resultQuery.stages.map((element, index) => (
                    <p>stage #{index + 1} {' '} {element}</p>
                  ))}
                </div>
                <div className='explain-section__body'>
                </div>
              </details>
            </div>
          );
        })}
      </div>
    </section>
  );
  
};

export default RresultQuery;
