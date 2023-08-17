import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { QueryTypes } from '../../../store/redusers/ResultQuerySlise';
import ResultStages from './ResultStages';

import './ResultQuery.css';

const RresultQuery: React.FC = () => {
  const resultQuery = useSelector((state: RootState) => state.results.response);

  return (
    <>
      {resultQuery.results.length > 0 && (
        <section className="result__section">
          <div>
            <h3>Results</h3>
            {resultQuery.results.map((result: QueryTypes, index: number) => {
              const lastStageRecord =
                result.stage_records[result.stage_records.length - 1];

              return (
                <div className="result__container" key={index}>
                  <details className="result__details">
                    <summary>
                      <span
                        className={`origin__line ${
                          lastStageRecord?.filtered_out ? 'filtered' : ''
                        }`}
                      >
                        Line: {index + 1}{' '}
                        <span className="origin__line">
                          {result.origin_line}
                        </span>
                      </span>
                    </summary>
                    <div className="explain-section origin-line">
                      <p className="origin__line-header">
                        Original log line{' '}
                        <span className="stage-expression">{`{job="analyze"}`}</span>
                      </p>
                      <p className="origin__line">{result.origin_line}</p>
                    </div>
                    <ResultStages
                      key={result.origin_line}
                      stage_records={result.stage_records}
                      stages={resultQuery.stages}
                    />
                  </details>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default RresultQuery;
