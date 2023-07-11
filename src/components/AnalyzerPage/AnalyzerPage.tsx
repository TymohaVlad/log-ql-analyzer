import React from 'react';
import AnalyzerQuery from './AnalyzeQuery/AnalyzerQuery';
import LogsSource from './LogsSourse/LogsSource';
import './AnalyzerPage.css';


export default function AnalyzerPage() {
  return (
    <main className="analizator__section">
      <div className="description__container">
        <h1 className="analizator__title">LogQL Analyzer</h1>
        <p className="analizator__description">
          The LogQL Analyzer is an inline tool for experimenting with writing
          LogQL queries.
        </p>
        <p className="analizator__description">
          Chose the log line format with the radio buttons. A set of example log
          lines are included for each format.
        </p>
        <p className="analizator__description">
          Use the provided example log lines, or copy and paste your own log
          lines into the example log lines box.
        </p>
        <p className="analizator__description">
          Use the provided example query, or enter your own query.The {' '}
          <a href="https://grafana.com/docs/loki/v2.7.x/logql/log_queries/#log-stream-selector">
            log stream selector
          </a> {' '}
          remains fixed for all possible example queries. Modify the remainder
          of the log line and click on the
         {' '} <strong>Run query</strong> {' '}
          button to run the entered query against the example log lines.
        </p>
        <p className="analizator__description">
          The results output provides details for each example log line.
          Clicking on a line in the results pane expands the details, showing
          why the line is or is not included in the query result set.
        </p>
      <LogsSource/>
      <AnalyzerQuery/>
      </div>
    </main>
  );
}
