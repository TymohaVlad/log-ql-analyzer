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
import ApiClient from '../../../utils/ApiClient';
import { setResultQuery } from '../../../store/redusers/ResultQuerySlise';
import { ResultQueryState } from '../../../store/redusers/ResultQuerySlise';

type LogFormatTemplates = {
  [key: string]: {
    logs: string;
    query: string;
  };
};

export default function LogsSource() {
  const dispatch = useDispatch();
  const logFormat = useSelector((state: RootState) => state.logsFormat.logsFormat);
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
    const urlParams = new URLSearchParams(window.location.search);
    const logs = urlParams.get('logs');
    const query = urlParams.get('query');
    
    
    if (logs && query) {
      setTextAreaLogs(logs);

      const prefix = '{job="analyze"}';
      const newQuery = `${prefix}${query}`;
      dispatch(setLogs(logs));
      dispatch(setQuery(query));

      const apiClient = new ApiClient();
      apiClient
        .executeQuery(logs, newQuery)
        .then((response) => {
          dispatch(setResultQuery(response));
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    } else {
      setSelectedFormat(null);
      setTextAreaLogs(templates[logFormat].logs);
      dispatch(setQuery(templates[logFormat].query));
      dispatch(setLogs(templates[logFormat].logs));
    }

  
  }, [logFormat, templates, dispatch]);

  const apiClient = new ApiClient();
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const handleChangeFormat = async (format: string) => {
    setSelectedFormat(format)
    const logs = templates[format].logs;
    const query = templates[format].query;
    const prefix = '{job="analyze"}';
    const newQuery = `${prefix}${query}`;
    const logFormatToSet = encodeURIComponent(format);

    const currentUrl = window.location.origin + window.location.pathname;
    const updatedUrl = `${currentUrl}?logfmt=${logFormatToSet}&logs=${encodeURIComponent(
      logs
    )}&query=${encodeURIComponent(query)}`;

    window.history.pushState({ path: updatedUrl }, '', updatedUrl);

    dispatch(setLogFormat(format));

    try {
      await dispatch(setLogs(logs));
      await dispatch(setQuery(query));

      const response: ResultQueryState['response'] =
        await apiClient.executeQuery(logs, newQuery);
      dispatch(setResultQuery(response));
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  const handleLogsChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newLogs = event.target.value;
    setTextAreaLogs(newLogs);

    dispatch(setLogs(newLogs));
  };

  const selectedLogs = useSelector((state: RootState) => state.logsFormat.logs);
  const selectedQuery = useSelector((state: RootState) => state.query.query);
  
  async function handleClickShare() {
    let currentUrl = window.location.origin + window.location.pathname;
    
    const logs = encodeURIComponent(selectedLogs);
    const query = encodeURIComponent(selectedQuery);

    currentUrl += `?logs=${logs}&query=${query}`;

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
                checked={selectedFormat === format }
                onChange={() => handleChangeFormat(format)}
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
          onChange={handleLogsChange}
        ></textarea>
      </div>
    </section>
  );
}




