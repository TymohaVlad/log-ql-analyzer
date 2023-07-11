import React from 'react';
import { useState } from 'react';
import './AnalyzerPage.css';

export default function AnalyzerQuery() {
  const [defaultValue, setDefaultValue] = useState('| logfmt | level = "info"');

  return (
    <section className="logs-source panel-container">
      <div className="query__container">
        <div className="form__list">
          <span className="input__item">
            <b>Log line format:</b>
          </span>
          <input
            className="logfmt radio"
            type="radio"
            value="logfmt"
            name="logFormat"
            id="logfmt"
          />
          <label htmlFor="logfmt">logfmt</label>

          <input
            className="lson radio"
            type="radio"
            value="JSON"
            name="logFormat"
            id="json"
          />
          <label htmlFor="json">JSON</label>

          <input
            className="unstructured radio"
            type="radio"
            value="unstructured_text"
            name="logFormat"
            id="unstructured"
          />
          <label htmlFor="unstructured">Unstructured text</label>
        </div>

        <button className="share__btn">
          <svg
            className="share__svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path
              fill="currentColor"
              d="M13.5 11c-.706 0-1.342.293-1.797.763L4.969 8.396a2.46 2.46 0 000-.792l6.734-3.367a2.5 2.5 0 10-.672-1.341L4.297 6.263a2.5 2.5 0 100 3.474l6.734 3.367A2.5 2.5 0 1013.5 11z"
            />
          </svg>
          Share
        </button>
      </div>

      <div className="textArea__container">
        <p className="panel__header">
          <b>{'{job="analyze"}'}</b>
        </p>
        <textarea
          className="source__input"
          name="logs-source__input"
          id="logs-source-input"
        ></textarea>
      </div>
      <section className="query panel-container">
        <span className="panel__header">
          <b>Query</b>
        </span>
        <div className="query__box">
          <div className="input__box">
            <span className="prefix">{`{job="analyze"}`}</span>
            <input
              className="query__input"
              value={defaultValue}
              type="text"
              id="query__input"
              onChange={(e) => setDefaultValue(e.target.value)}
            />
          </div>
          <button className="query__submit primary__button">Run query</button>
        </div>
      </section>
    </section>
  );
}
