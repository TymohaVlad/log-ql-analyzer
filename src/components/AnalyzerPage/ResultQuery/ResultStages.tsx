import React from 'react';
import ExplainStages from './ExplainStages';
import {FaArrowDown} from 'react-icons/fa'

export interface ResultStagesProps {
  stage_records: {
    filtered_out: boolean;
    labels_after: { name: string; value: string }[];
    labels_before: { name: string; value: string }[];
    line_after: string;
    line_before: string;
  }[];
  stages: string[];
}

function ResultStages({ stage_records, stages }: ResultStagesProps) {
  return (
    <div className="explain-section stage-line">
      {stage_records.map((stage__before, index) => (
        <div className="explain__stage" key={index}>
          <div className="explain-section__header">
            <span className="stages__line">
              <b>stage #{index + 1} : </b>
            </span>
            <span className="stage-expression">{stages[index]} </span>
          </div>
          <hr />
          <div className="explain-section__body">
            <ExplainStages
              labels_before={stage__before.labels_before}
              labels_after={stage__before.labels_after}
              line_before={stage__before.line_before}
              line_after={stage__before.line_after}
              filtred_out={stage__before.filtered_out}
            />
          </div>
          < FaArrowDown className='arrow'/>
        </div>
        ))}
        <>
        
        </>
    </div>
  );
}

export default ResultStages;
