import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class ApiClient<T> {
  endpoint: string;
  httpClient: AxiosInstance;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.httpClient = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    });
  }

  getAll = (config: AxiosRequestConfig) => {
    return this.httpClient
      .get<T>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return this.httpClient
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };

  post = (config: AxiosRequestConfig, data?: any) => {
    return this.httpClient
      .post<T>(this.endpoint, data, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
