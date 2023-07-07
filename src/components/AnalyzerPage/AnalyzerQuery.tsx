import React from 'react';
import './AnalyzerPage.css';

export default function AnalyzerQuery() {
  return (
    <div className="query__container">
      <div className="form__list">
        <span className='input__item'><b>Log line format:</b></span>
        <input type="radio" value="logfmt" name="logFormat" id="logfmt" />
        <label htmlFor="logfmt">logfmt</label>

        <input type="radio" value="JSON" name="logFormat" id="json" />
        <label htmlFor="json">JSON</label>

        <input type="radio" value="unstructured_text" name="logFormat" id="unstructured" />
        <label htmlFor="unstructured">Unstructured text</label>
      </div>
      <button className="share__btn">Share</button>
    </div>
  );
}
