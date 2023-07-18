import React, { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { setLogFormat } from '../../../store/redusers/logsFotmatSlise';
import { setQuery } from '../../../store/redusers/QuerySlice';
import { setLogs } from '../../../store/redusers/logsFotmatSlise';
import {
  LOG_FORMAT_EXAMPLE_LOG,
  JSON_PARSER_EXAMPLE_LOG,
  PATTERN_PARSER_EXAMPLE_LOG,
} from '../AnalyzeQuery/Variables';
import {
  LOG_FORMAT_EXAMPLE_QUERY,
  JSON_PARSER_EXAMPLE_QUERY,
  PATTERN_PARSER_EXAMPLE_QUERY,
} from '../AnalyzeQuery/Variables';
import { FiCheckCircle } from 'react-icons/fi';

type LogFormatTemplates = {
  [key: string]: {
    logs: string;
    query: string;
  };
};

export default function LogsSource() {
  const dispatch = useDispatch();
  const logFormat = useSelector(
    (state: RootState) => state.logsFormat.logsFormat
  );
  const [copySuccess, setcopySuccess] = useState<boolean>(false);

  const [templates] = useState<LogFormatTemplates>({
    logfmt: {
      logs: LOG_FORMAT_EXAMPLE_LOG,
      query: LOG_FORMAT_EXAMPLE_QUERY,
    },
    JSON: {
      logs: JSON_PARSER_EXAMPLE_LOG,
      query: JSON_PARSER_EXAMPLE_QUERY,
    },
    unstructured_text: {
      logs: PATTERN_PARSER_EXAMPLE_LOG,
      query: PATTERN_PARSER_EXAMPLE_QUERY,
    },
  });
  const [textAreaLogs, setTextAreaLogs] = useState('');
  useEffect(() => {
    setTextAreaLogs(templates[logFormat].logs)
  }, [logFormat, templates]);

  const handleChangeFormat = (event: ChangeEvent<HTMLInputElement>): void => {
    const format = event.target.value;
    setLogFormat(format);
    dispatch(setLogFormat(format));
  };

  const selectedLogs = templates[logFormat].logs;
  dispatch(setQuery(templates[logFormat].query));
  dispatch(setLogs(templates[logFormat].logs));

  async function handleClickShare() {
    let currentUrl = window.location.href;
    currentUrl += encodeURIComponent(selectedLogs);
    await navigator.clipboard.writeText(currentUrl);
    setcopySuccess(true);

    setTimeout(() => {
      setcopySuccess(false);
    }, 2000);
  }
  return (
    <section className="logs-source panel-container">
      <div className="query__container">
        <div className="form__list">
          <span className="input__item">
            <b>Log line format:</b>
          </span>
          {Object.keys(templates).map((format) => (
            <React.Fragment key={format}>
              <input
                className={`${format} radio`}
                type="radio"
                value={format}
                checked={logFormat === format}
                onChange={handleChangeFormat}
                name="logFormat"
                id={format}
              />
              <label htmlFor={format}>{format}</label>
            </React.Fragment>
          ))}
        </div>
        <span className="copy__link-message">
          {copySuccess && (
            <>
              Link copied to clipboard <FiCheckCircle />
            </>
          )}
        </span>
        <button className="share__btn" onClick={handleClickShare}>
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
          value={textAreaLogs}
          onChange={(e) => setTextAreaLogs(e.target.value)}
        ></textarea>
      </div>
    </section>
  );
}
