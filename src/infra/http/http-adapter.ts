import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpClient {
  public readonly instance: AxiosInstance;

  constructor (config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  public async get<T> (path: string): Promise<AxiosResponse<T>> {
    return this.instance.get(path);
  }
}
