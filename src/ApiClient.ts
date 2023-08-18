import { ResultQueryState } from "./store/redusers/ResultQuerySlise";
class ApiClient {
  host: string = 'https://logql-analyzer.grafana.net/next/api/logql-analyze';

  async executeQuery(logs: string, query: string): Promise<ResultQueryState['response']> {
    const logArray = logs.split('\n').filter(Boolean);
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ logs: logArray, query })
    };

    try {
      const response = await fetch(this.host, requestOptions);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data: ResultQueryState['response'] = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  }
}

export default ApiClient;
